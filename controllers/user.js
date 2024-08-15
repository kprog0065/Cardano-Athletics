import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModal from "../models/user.js";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const EXPIRES_IN = process.env.EXPIRES_IN;

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const oldUser = await UserModal.findOne({ email });
    if (!oldUser) {
      return res.status(400).json({ message: "User mot Exists" });
    }
    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invaild" });
    }
    const token = jwt.sign({ id: oldUser._id }, JWT_SECRET, {
      expiresIn: EXPIRES_IN,
    });
    res.status(200).json({
      user: {
        id: oldUser._id,
        firstName: oldUser.firstName,
        lastName: oldUser.lastName,
        email: oldUser.email,
        // add other non-sensitive information if needed
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Somthing went wrong" });

  }
};

export const signup = async (req, res) => {
  const { email, password, firstName, lastName, country, dob, fatherName } =
    req.body;
  try {
    const oldUser = await UserModal.findOne({ email });
    if (oldUser) {
      return res.status(400).json({ message: "User Alerady Exists" });
    }
    const hashPassword = await bcrypt.hash(password, 12);
    const result = await UserModal.create({
      email,
      password: hashPassword,
      firstName,
      lastName,
      country,
      dob,
      fatherName,
    });
    const token = jwt.sign({ id: result._id }, JWT_SECRET, {
      expiresIn: EXPIRES_IN,
    });
    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Somthing went wrong" });
    console.log(error);
  }
};


export const verifyToken = async (req, res) => {
  try {
    const user = await UserModal.findById(req.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Token is valid", user });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};