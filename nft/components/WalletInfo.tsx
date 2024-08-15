const WalletInfo = ({ walletInfo }: any) => {

    return (
        <div style={{ color: "white" }}><b>Wallet Balance In Lovelace</b>
            <i>&nbsp;&nbsp;&nbsp;&nbsp;{walletInfo.balance}</i>
        </div>
    )
}

export default WalletInfo
