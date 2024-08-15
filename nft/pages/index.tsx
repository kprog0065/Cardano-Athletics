import Head from "next/head";
import MintNFT from "../components/MintNFT";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import WalletInfo from "../components/WalletInfo";
import Program from "../contracts/nft.hl";
import {
  Assets,
  Address,
  ByteArrayData,
  Cip30Handle,
  Cip30Wallet,
  ConstrData,
  hexToBytes,
  NetworkParams,
  Value,
  TxOutput,
  Tx,
  WalletHelper,
} from "@hyperionbt/helios";

declare global {
  interface Window {
    cardano: any;
  }
}

const Home: NextPage = () => {
  const optimize = false;
  const networkParamsUrl = "https://d1t0d7c2nekuk0.cloudfront.net/preprod.json";
  // const networkParamsUrl = "https://d1t0d7c2nekuk0.cloudfront.net/preview.json";
  // const networkParamsUrl = "https://book.world.dev.cardano.org/environments/preview/shelley-genesis.json";
  // const networkParamsUrl = "https://raw.githubusercontent.com/apatel2582/preview_network_cardano_json/main/preview.json";
  const [walletInfo, setWalletInfo] = useState({ balance: "" });
  const [walletIsEnabled, setWalletIsEnabled] = useState(false);
  const [whichWalletSelected, setWhichWalletSelected] = useState(undefined);
  const [walletAPI, setWalletAPI] = useState<undefined | any>(undefined);
  const [walletHelper, setWalletHelper] = useState<undefined | any>(undefined);

  const [tx, setTx] = useState({ txId: "" });

  useEffect(() => {
    const checkWallet = async () => {
      setWalletIsEnabled(await checkIfWalletFound());
    };
    checkWallet();
  }, [whichWalletSelected]);

  useEffect(() => {
    const enableSelectedWallet = async () => {
      if (walletIsEnabled) {
        await enableWallet();
      }
    };
    enableSelectedWallet();
  }, [walletIsEnabled]);

  useEffect(() => {
    const updateWalletInfo = async () => {
      if (walletIsEnabled) {
        const _balance = (await getBalance()) as string;
        setWalletInfo({
          ...walletInfo,
          balance: _balance,
        });
      }
    };
    updateWalletInfo();
  }, [walletAPI]);

  // user selects what wallet to connect to
  const handleWalletSelect = (obj: any) => {
    const whichWalletSelected = obj.target.value;
    setWhichWalletSelected(whichWalletSelected);
  };

  const checkIfWalletFound = async () => {
    let walletFound = false;

    const walletChoice = whichWalletSelected;
    if (walletChoice === "nami") {
      walletFound = !!window?.cardano?.nami;
    } else if (walletChoice === "eternl") {
      walletFound = !!window?.cardano?.eternl;
    }
    return walletFound;
  };

  const enableWallet = async () => {
    try {
      const walletChoice = whichWalletSelected;
      if (walletChoice === "nami") {
        const handle: Cip30Handle = await window.cardano.nami.enable();
        const walletAPI = new Cip30Wallet(handle);
        const walletHelper = new WalletHelper(walletAPI);
        setWalletHelper(walletHelper);
        setWalletAPI(walletAPI);
      } else if (walletChoice === "eternl") {
        const handle: Cip30Handle = await window.cardano.eternl.enable();
        const walletAPI = new Cip30Wallet(handle);
        const walletHelper = new WalletHelper(walletAPI);
        setWalletHelper(walletHelper);
        setWalletAPI(walletAPI);
      }
    } catch (err) {
      console.log("enableWallet error", err);
    }
  };

  const getBalance = async () => {
    try {
      const balanceAmountValue = await walletHelper.calcBalance();
      const balanceAmount = balanceAmountValue.lovelace;
      const walletBalance: BigInt = BigInt(balanceAmount);
      return walletBalance.toLocaleString();
    } catch (err) {
      console.log("getBalance error: ", err);
    }
  };

  const mintNFT = async (params: any) => {
    // Re-enable wallet API since wallet account may have been changed
    await enableWallet();

    const address = params[0];
    const name = params[1];
    const description = params[2];
    const img = params[3];
    const minAda: number = 2000000; // minimum lovelace needed to send an NFT
    const maxTxFee: number = 500000; // maximum estimated transaction fee
    const minChangeAmt: number = 1000000; // minimum lovelace needed to be sent back as change
    const minAdaVal = new Value(BigInt(minAda));
    const minUTXOVal = new Value(BigInt(minAda + maxTxFee + minChangeAmt));

    // Get wallet UTXOs
    const utxos = await walletHelper.pickUtxos(minUTXOVal);

    // Get change address
    const changeAddr = await walletHelper.changeAddress;

    // Start building the transaction
    const tx = new Tx();

    // Add the UTXO as inputs
    tx.addInputs(utxos[0]);

    const nftProgram = new Program();
    nftProgram.parameters = { ["TX_ID"]: utxos[0][0].txId.hex };
    nftProgram.parameters = { ["TX_IDX"]: utxos[0][0].utxoIdx };
    nftProgram.parameters = { ["TN"]: name };

    // Compile the helios minting script
    const nftCompiledProgram = nftProgram.compile(optimize);

    // Add the script as a witness to the transaction
    tx.attachScript(nftCompiledProgram);

    // Construct the NFT that we will want to send as an output
    const nftTokenName = ByteArrayData.fromString(name).toHex();
    const tokens: [number[], bigint][] = [
      [hexToBytes(nftTokenName), BigInt(1)],
    ];

    // Create an empty Redeemer because we must always send a Redeemer with
    // a plutus script transaction even if we don't actually use it.
    const mintRedeemer = new ConstrData(0, []);

    // Indicate the minting we want to include as part of this transaction
    tx.mintTokens(nftCompiledProgram.mintingPolicyHash, tokens, mintRedeemer);

    // Construct the output and include both the minimum Ada as well as the minted NFT
    tx.addOutput(
      new TxOutput(
        Address.fromBech32(address),
        new Value(
          minAdaVal.lovelace,
          new Assets([[nftCompiledProgram.mintingPolicyHash, tokens]])
        )
      )
    );

    const networkParams = new NetworkParams(
      await fetch(networkParamsUrl).then((response) => response.json())
    );

    // Attached the metadata for the minting transaction
    tx.addMetadata(721, {
      map: [
        [
          nftCompiledProgram.mintingPolicyHash.hex,
          {
            map: [
              [
                name,
                {
                  map: [
                    ["name", name],
                    ["description", description],
                    ["image", img],
                  ],
                },
              ],
            ],
          },
        ],
      ],
    });

    console.log("tx before final", tx.dump());

    // Send any change back to the buyer
    await tx.finalize(networkParams, changeAddr, utxos[1]);

    console.log("Verifying signature...");
    const signatures = await walletAPI.signTx(tx);
    tx.addSignatures(signatures);

    console.log("tx after final", tx.dump());
    console.log("Submitting transaction...");
    const txHash = await walletAPI.submitTx(tx);

    console.log("txHash", txHash.hex);
    setTx({ txId: txHash.hex });
  };

  return (
    // <div className={styles.container}>
    //   <Head>
    //     <title>Cardano Athletics NFT Creator</title>
    //     <meta name="description" content="Cardano Athletics NFT Creator" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className={styles.main}>
    //     <h3 className={styles.title}>Cardano Athletics NFT Creator</h3>

    //     <div className={styles.borderwallet}>
    //       <p>Connect to your wallet</p>
    //       <p className={styles.borderwallet}>
    //         <input
    //           type="radio"
    //           id="nami"
    //           name="wallet"
    //           value="nami"
    //           onChange={handleWalletSelect}
    //         />
    //         <label>Nami</label>
    //       </p>
    //       <p className={styles.borderwallet}>
    //         <input
    //           type="radio"
    //           id="eternl"
    //           name="wallet"
    //           value="eternl"
    //           onChange={handleWalletSelect}
    //         />
    //         <label>Eternl</label>
    //       </p>
    //     </div>
    //     {!tx.txId && walletIsEnabled && (
    //       <div className={styles.border}>
    //         <WalletInfo walletInfo={walletInfo} />
    //       </div>
    //     )}
    //     {tx.txId && (
    //       <div className={styles.border}>
    //         <b>Transaction Success!!!</b>
    //         <p>
    //           TxId &nbsp;&nbsp;
    //           <a
    //             href={"https://preview.cexplorer.io/tx/" + tx.txId}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             {tx.txId}
    //           </a>
    //         </p>
    //         <p>
    //           Please wait until the transaction is confirmed on the blockchain
    //           and reload this page before doing another transaction
    //         </p>
    //       </div>
    //     )}
    //     {walletIsEnabled && !tx.txId && (
    //       <div className={styles.border}>
    //         <MintNFT onMintNFT={mintNFT} />
    //       </div>
    //     )}
    //     {/* Your permanent back button */}
    //     <a href="http://localhost:3000" className={styles.backButton}>
    //       Go Back
    //     </a>
    //   </main>

    //   <footer className={styles.footer}></footer>
    // </div>
    <div className={styles.container}>
      <Head>
        <title>Cardano Athletics NFT Creator</title>
        <meta name="description" content="Cardano Athletics NFT Creator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>Cardano Athletics NFT Creator</h3>

        <div className={styles.borderwallet}>
          <p>Connect to your wallet</p>
          <p className={styles.borderwallet}>
            <input
              type="radio"
              id="nami"
              name="wallet"
              value="nami"
              onChange={handleWalletSelect}
            />
            <label>Nami</label>
          </p>
          <p className={styles.borderwallet}>
            <input
              type="radio"
              id="eternl"
              name="wallet"
              value="eternl"
              onChange={handleWalletSelect}
            />
            <label>Eternl</label>
          </p>
        </div>
        {!tx.txId && walletIsEnabled && (
          <div className={styles.border}>
            <WalletInfo walletInfo={walletInfo} />
          </div>
        )}
        {tx.txId && (
          <div className={styles.border}>
            <b>Transaction Success!!!</b>
            <p>
              TxId &nbsp;&nbsp;
              <a
                href={"https://preprod.cardanoscan.io/transaction/" + tx.txId}
                target="_blank"
                rel="noopener noreferrer"
              >
                {tx.txId}
              </a>
            </p>
            <p>
              Please wait until the transaction is confirmed on the blockchain
              and reload this page before doing another transaction
            </p>
          </div>
        )}
        {walletIsEnabled && !tx.txId && (
          <div className={styles.border}>
            <MintNFT onMintNFT={mintNFT} />
          </div>
        )}
        {/* Your permanent back button */}
        <a href="http://localhost:3000" className={styles.backButton}>
          Go Back
        </a>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
