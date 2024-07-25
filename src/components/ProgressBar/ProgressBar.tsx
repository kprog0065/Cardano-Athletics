import React, { CSSProperties, useEffect, useRef } from "react";
interface ProgressBarProps {
  currentValue?: number;
  style?: CSSProperties | undefined;
}
function ProgressBar({ currentValue = 0, style }: ProgressBarProps) {
  const pr = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (pr.current) {
      pr.current.style.width = `${currentValue}%`;
    }
  }, [currentValue]);
  return (
    <div className="progress-bar-container" style={style}>
      <div className="progress" ref={pr} />
    </div>
  );
}

export default ProgressBar;
