import React from "react";
import SidePanel from "../../components/SidePanel/SidePanel";
import BottomBar from "../../components/BottomBar/BottomBar";
import DetailingPanel from "../../components/DetailingPanel/DetailingPanel";
import SkillFormDetail from "../../components/SkillFormDetail/SkillFormDetail";



function MainPage() {

  return (
    <section >
    <div className="main-page-container">
      <div className="inner-container">
        <SidePanel />
        <div className="detail-panel-main-container">
          <SkillFormDetail />
          <DetailingPanel />
        </div>
      </div>
      {/* <BottomBar /> */}

    </div>
    </section>
  );
}

export default MainPage;
