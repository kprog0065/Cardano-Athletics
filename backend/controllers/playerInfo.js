import PlayerModal from "../models/playerInfo.js";
import User from "../models/user.js";

export const addPlayer = async (req, res) => {
  try {
    const existingPlayer = await PlayerModal.findOne({ userId: req.userId });
    if (existingPlayer) {
      return res
        .status(400)
        .json({ message: "Player already exists for this user." });
    }
    const { pace, shooting, passing, dribbling, defending, physical } =
      req.body;
    const newPlayer = await PlayerModal.create({
      userId: req.userId,
      pace,
      shooting,
      passing,
      dribbling,
      defending,
      physical,
    });
    res
      .status(201)
      .json({ message: "Player added successfully", player: newPlayer });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const getPlayerById = async (req, res) => {
  console.log(req.userId)
  try {
    const player = await PlayerModal.findOne({ userId: req.userId });
    if (!player) {
      return res.status(404).json({message:"Plyaer not found"});
    }
    res.json(player);
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
};

export const updatePlayerById = async (req, res) => {
  let id = req.params.id;
  const { pace, shooting, passing, dribbling, defending, physical } = req.body;

  try {
    // Find the player by id
    let player = await PlayerModal.findById(id);

    if (!player) {
      return res.status(404).send({ error: "Player not found" });
    }

    // Update the player fields
    player.pace = pace;
    player.shooting = shooting;
    player.passing = passing;
    player.dribbling = dribbling;
    player.defending = defending;
    player.physical = physical;

    // Save the updated player
    await player.save();

    res.status(200).json({
      success: true,
      msg: "Updated Successfully",
      data: player,
    });
  } catch (error) {
    console.error(error);
    res.status(400).send({ error });
  }
};
export const deletePlayerById = async (req, res) => {
  try {
    const player = await PlayerModal.findOneAndDelete({ userId: req.userId });

    if (!player) {
      return res.status(404).json();
    }

    const user = await User.findById(req.userId);
    user.player = null;
    await user.save();

    res.status(200).json({
      success: true,
      msg: "Deleted Successfully",
      data: {},
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
