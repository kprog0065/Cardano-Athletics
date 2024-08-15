import React from "react";
import { positonconstants } from "../../constants/constants";
import { Image } from "react-bootstrap";
import { getColor } from "../../helper/helper";

interface DisplayUser {
  email: string;
  id: string;
  firstName: string;
  lastName: string;
  dob: string
}
interface DisplayUserProps {
  user: DisplayUser | null
}
// utils/ageCalculator.ts

export const calculateAge = (dob: string | any): number => {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  // Check if the birthday has occurred this year yet
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

function SidePanel({ user }: DisplayUserProps) {

  return (
    <div className="side-panel">
      <div className="player-detail-view">
        <Image src="/Images/man.png" />
        <div style={{ flexDirection: "row", display: "flex", gap: "12px" }}>
          <div className="player-detail-desc">
            <div className="age">Age : {calculateAge(user?.dob)}</div>
            <div className="cm-tx">
              <span className="green-circle-border" />
              CM
            </div>
            <div>
              <div className="foot">Preffered foot</div>
              <div className="foot-type">Right</div>
            </div>
          </div>
          <div className="ovr-container">
            <div className="ovr-text">OVR</div>
            <div className="ovr-number" style={{ color: getColor(64) }}>
              64
            </div>
            <div className="footprint-container">
              <Image src="/Images/left-shoe.svg" />
              <Image
                src="/Images/right-shoe.svg"
                className="footprint-container-img-active"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="player-detail">
        <span className="title">{user?.firstName}</span>
        <span className="plan-type">{user?.lastName}</span>
      </div>
      <div className="type-detail">
        <span className="title">Plan</span>
        <span className="plan-type">[Cam]</span>
      </div>
      <div className="growth-poition-view">
        <div style={{ flexDirection: "row", display: "flex" }}>
          {["GROWTH", "POSITION"].map((item, index) => {
            return (
              <div className="growth-poition-text-view">
                {index != 0 ? "|" : ""}
                <div
                  className="growth-poition-text"
                  style={{ color: index != 0 ? "#7f452e" : "" }}
                >
                  {item}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="plan-type-options-view">
        {positonconstants.map((item, index) => {
          return (
            <div
              key={index}
              className={`plan-type-options ${index == 2 ? "plan-type-options-active" : ""
                }`}
            >
              <Image src="/Images/green_success_icon.svg" />
              {item.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SidePanel;
