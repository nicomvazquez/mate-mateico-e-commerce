import Admin from "../models/admin.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const register = async (req, res) => {
  try {
    const { name, dni, password } = req.body;

    const userFound = await Admin.findOne({ dni });

    if (userFound) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const admin = new Admin({
      name,
      dni,
      password: passwordHash,
    });

    const newAdmin = await admin.save();

    const token = jwt.sign({ id: newAdmin._id }, TOKEN_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token);

    res.status(200).json(newAdmin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { dni, password } = req.body;

    const adminFound = await Admin.findOne({ dni });

    if (!adminFound) {
      return res.status(400).json({ message: "user not found" });
    }

    const isMatch = await bcrypt.compare(password, adminFound.password);

    if (!isMatch) {
      return res.status(400).json({ message: "incorrect password" });
    }

    const token = jwt.sign({ id: adminFound._id }, TOKEN_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token);

    res.status(200).json(adminFound);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const verifyToken = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "no token provided" });
    }

    jwt.verify(token, TOKEN_SECRET, async (error, user) => {
      if (error) {
        return res.status(401).json({ message: "invalid token" });
      }
      req.user = user;
      res.status(200).json(req.user);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "logged out" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
