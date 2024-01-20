import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const register = async (req, res) => {
  try {
    console.log(req.body);
    const { userName, password, city } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({ userName, password: passwordHash, city });
    const savedUser = await newUser.save();

    return res.status(200).json(savedUser);
  } catch (error) {
    return res.status(400).json({ error: `Could not create user ${error}` });
  }
};
