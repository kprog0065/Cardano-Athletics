import mongoose from "mongoose";
import calculateAverages from "../middleware/playerInfo.js";

const playerSchema = new mongoose.Schema({
  userId: {type: String, unique: true},
  playerInfo: {
    shooting: { type: Number, default: 0 },
    passing: { type: Number, default: 0 },
    dribbling: { type: Number, default: 0 },
    defending: { type: Number, default: 0 },
    physical: { type: Number, default: 0 },
    pace: { type: Number, default: 0 }
  },
  pace: {
    sprintSpeed: { type: Number, default: 0 },
    acceleration: { type: Number, default: 0 }
  },
  shooting: {
    finishing: { type: Number, default: 0 },
    attPosition: { type: Number, default: 0 },
    shotPower: { type: Number, default: 0 },
    longShots: { type: Number, default: 0 },
    penalaties: { type: Number, default: 0 },
    volleys: { type: Number, default: 0 }
  },
  passing: {
    vision: { type: Number, default: 0 },
    crossing: { type: Number, default: 0 },
    fkAcc: { type: Number, default: 0 },
    longPass: { type: Number, default: 0 },
    shortPass: { type: Number, default: 0 },
    curve: { type: Number, default: 0 }
  },
  dribbling: {
    agility: { type: Number, default: 0 },
    balance: { type: Number, default: 0 },
    reactions: { type: Number, default: 0 },
    composure: { type: Number, default: 0 },
    ballControl: { type: Number, default: 0 },
    dribbling: { type: Number, default: 0 }
  },
  defending: {
    interceptions: { type: Number, default: 0 },
    headingAcc: { type: Number, default: 0 },
    defAware: { type: Number, default: 0 },
    standTackle: { type: Number, default: 0 },
    slideTackle: { type: Number, default: 0 }
  },
  physical: {
    jumping: { type: Number, default: 0 },
    stamina: { type: Number, default: 0 },
    strength: { type: Number, default: 0 },
    aggression: { type: Number, default: 0 }
  }
});

playerSchema.pre('save', calculateAverages);

export default mongoose.model("Player", playerSchema);
