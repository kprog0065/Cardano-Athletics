import express from "express";
import auth from "../middleware/user.js";
const router = express.Router();
import { addPlayer,updatePlayerById,deletePlayerById,getPlayerById } from "../controllers/playerInfo.js";


router.post("/football/player", auth, addPlayer);
router.get("/football/player", auth, getPlayerById);
router.patch("/football/player/:id", auth, updatePlayerById);
router.delete("/football/player", auth, deletePlayerById);

export default router;
