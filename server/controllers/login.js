import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;

    const user = await User.findOne({ userName: userName });

    console.log("USER", user);
    if (!user) {
      return res.status(400).json({ error: "Username not found" });
    }

    const correctPassword = await bcrypt.compare(password, user.password);
    console.log("correctPassword", correctPassword);
    if (!correctPassword) {
      return res.status(400).json({ error: "Incorrect password" });
    }

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
