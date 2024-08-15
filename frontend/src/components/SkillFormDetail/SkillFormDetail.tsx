import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import { Image } from "react-bootstrap";
import { skillspecs } from "../../constants/constants";

function SkillFormDetail() {
  return (
    <div className="skill-form-detail">
      <div className="skill-form-detail-view">
        <div className="form-name">Attacking Midfielder (CAM)</div>
        <div className="change-position-container">
          <div className="change-position-view">
            <div className="change-position-text-view">
              <div className="t-image-container">
                <Image src={"/Images/triangle-shape.svg"} />
              </div>
              Change Position
            </div>
            CAM
          </div>
          <div className="green-line" />
        </div>
        <div className="form-detail">Form: Okay</div>
        <div className="form-detail" style={{ width: "80%" }}>
          Devlopment plan have regular growth when a player is in average form
        </div>
      </div>
      <div className="line" />
      <div className="progress-skill">
        {skillspecs.map((val) => (
          <div
            className={`progress-spec-view ${
              true ? "progress-spec-view-disable" : ""
            }`}
          >
            <div>
              <span>{val.name}</span>
              <span className="spec-value">{val.value}</span>
            </div>
            <ProgressBar
              currentValue={val.progress}
              style={{ width: "250px" }}
            />
            {false && (
              <Image src="/Images/rewind-arrow.svg" className="rewind-arrow" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillFormDetail;
