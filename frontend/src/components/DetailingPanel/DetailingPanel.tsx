import React, { useEffect, useState } from "react";
import { formspecconstants } from "../../constants/constants";
import { getColor } from "../../helper/helper";
import ProgressBar from "../ProgressBar/ProgressBar";
import { Image } from "react-bootstrap";

interface Spec {
  name: string;
  value: number;
  status: string;
}

interface FormData {
  formName: string;
  formvalue: number;
  specs: Spec[];
}
interface PlayerData {
  playerInfo: {
    shooting: number;
    passing: number;
    dribbling: number;
    defending: number;
    physical: number;
    pace: number;
  };
  pace: {
    sprintSpeed: number;
    acceleration: number;
  };
  shooting: {
    finishing: number;
    attPosition: number;
    shotPower: number;
    longShots: number;
    penalties: number;
    volleys: number;
  };
  passing: {
    vision: number;
    crossing: number;
    fkAcc: number;
    longPass: number;
    shortPass: number;
    curve: number;
  };
  dribbling: {
    agility: number;
    balance: number;
    reactions: number;
    composure: number;
    ballControl: number;
    dribbling: number;
  };
  defending: {
    interceptions: number;
    headingAcc: number;
    defAware: number;
    standTackle: number;
    slideTackle: number;
  };
  physical: {
    jumping: number;
    stamina: number;
    strength: number;
    aggression: number;
  };
}
interface DetailingPanelProps {
  playerData: PlayerData | null;
}
function DetailingPanel({ playerData }: DetailingPanelProps) {
  const [forSpecConstants, setFormSpecConstants] = useState<FormData[]>([]);
  const convertResponseToConstant = (response: any) => {
    const convertCategory = (category: string, data: any): FormData => {
      const formValue = response.playerInfo[category.toLowerCase()];
      const specs = Object.keys(data).map((key) => {
        const value = data[key];
        const status = value > 70 ? "UP" : "DOWN"; // Adjust status based on value
        return { name: key.replace(/([A-Z])/g, " $1").trim(), value, status };
      });
      return { formName: category.toUpperCase(), formvalue: formValue, specs };
    };

    return [
      convertCategory('PACE', response?.pace),
      convertCategory('SHOOTING', response.shooting),
      convertCategory('PASSING', response.passing),
      convertCategory('DRIBBLING', response.dribbling),
      convertCategory('DEFENDING', response.defending),
      convertCategory('PHYSICAL', response.physical),
    ];
  };
  useEffect(() => {
    if (playerData) {
      const convertedData = convertResponseToConstant(playerData);
      setFormSpecConstants(convertedData)
      
    }
  }, [playerData])
  return (
    <div className="form-container">
      {forSpecConstants.map((item) => {
        return (
          <div>
            <div className="title-score-view">
              <div
                className="score-value"
                style={{ color: getColor(item.formvalue) }}
              >
                {item.formvalue}
              </div>
              {item.formName}
            </div>
            <div className="specs-container">
              {item.specs.map((val) => {
                return (
                  <div
                    className={`progress-spec-view ${!val.status ? "progress-spec-view-disable" : ""
                      }`}
                  >
                    <div>
                      <span>{val.name}</span>
                      <span className="spec-value">{val.value}</span>
                    </div>
                    <ProgressBar currentValue={val.value} />
                    {val.status === "UP" && (
                      <Image
                        src="/Images/rewind-arrow.svg"
                        className="rewind-arrow"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DetailingPanel;
