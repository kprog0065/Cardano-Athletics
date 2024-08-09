import React, { CSSProperties } from "react";
import { Image } from "react-bootstrap";

interface MenuProps {
  icon?: string;
  title?: string;
  imageStyle?: CSSProperties | undefined;
  containerStyle?: CSSProperties | undefined;
  children?: React.ReactChild | React.ReactChild[];
}

const Menu = ({
  icon,
  title,
  imageStyle,
  containerStyle,
  children,
}: MenuProps) => {
  return (
    <div className="bottom-menu-container">
      {children}
      {!!icon && (
        <div className="image-container" style={containerStyle}>
          <Image src={icon} style={imageStyle} />
        </div>
      )}
      {title}
    </div>
  );
};

function BottomBar() {
  return (
    <div className="bottom-view-container">
      <Menu icon={"/Images/circle.svg"} title={"Back"} />
      <Menu
        icon={"/Images/triangle-shape.svg"}
        title={"Change Position"}
        imageStyle={{
          marginBottom: "2px",
        }}
      />
      <Menu
        icon={"/Images/three-line.svg"}
        title={"Show Legend"}
        containerStyle={{
          width: "16px",
        }}
      />
      <Menu title={"Change Player"}>
        <div className="l1-r1-btn">L1</div>
        <div className="l1-r1-btn">R1</div>
      </Menu>
    </div>
  );
}
export default BottomBar;
