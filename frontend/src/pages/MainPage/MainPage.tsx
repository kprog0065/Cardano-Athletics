import React, { useEffect, useState } from "react";
import SidePanel from "../../components/SidePanel/SidePanel";
import BottomBar from "../../components/BottomBar/BottomBar";
import DetailingPanel from "../../components/DetailingPanel/DetailingPanel";
import SkillFormDetail from "../../components/SkillFormDetail/SkillFormDetail";
import { store } from "../../redux/store";
import api from "../../helper/api";
import { CircularProgress } from "@mui/material";
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
interface DisplayUser {
  email: string;
  id: string;
  firstName: string;
  lastName: string;
  dob: string
}
// Adjusted getuser function to return DisplayUser | null
const getUser = (): DisplayUser | null => {
  const state = store.getState();
 
  return state?.auth.user ? (state.auth.user as DisplayUser) : null;  // Type assertion here
};
function MainPage() {
  const [loading, setLoading] = useState(false)
  const [playerData, setPlayerData] = useState<PlayerData | null>(null);  // Specify the type
  const [user, setUser] = useState<DisplayUser | null>(null); // Specify the type
  const getPlayerData = async () => {
    try {
      setLoading(true)
      const profile = getUser();
      setUser(profile)
      const response = await api.get('/cardano-athletics/football/player');
      const { defending, dribbling, pace, passing, physical, playerInfo,
        shooting } = response?.data

      setPlayerData({
        defending, dribbling, pace, passing, physical, playerInfo,
        shooting
      })

    } catch (error) {
      console.error('Error :', error);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPlayerData();
  }, [])





  return (
    <section >
      <div className="main-page-container">
        {loading ? <CircularProgress /> : <>
          {
            playerData ?
              <div className="inner-container">
                < SidePanel user={user} />
                <div className="detail-panel-main-container">
                  <SkillFormDetail />
                  <DetailingPanel playerData={playerData} />
                </div>
              </div> : <div><span>Opps! Do not have profile. Please create your profile </span></div>
          }</>}
        {/* <BottomBar /> */}

      </div>

    </section >
  );
}

export default MainPage;
