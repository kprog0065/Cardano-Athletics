import React from "react";
import { formspecconstants } from "../../constants/constants";
import { getColor } from "../../helper/helper";
import ProgressBar from "../ProgressBar/ProgressBar";
import { Image } from "react-bootstrap";

function DetailingPanel() {
  return (
    <div className="form-container">
      {formspecconstants.map((item) => {
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
                    className={`progress-spec-view ${
                      !val.status ? "progress-spec-view-disable" : ""
                    }`}
                  >
                    <div>
                      <span>{val.name}</span>
                      <span className="spec-value">{val.value}</span>
                    </div>
                    <ProgressBar currentValue={val.value}/>
                    {!!val.status && (
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
