import User from "../models/user.js";
import bcrypt from "bcrypt";
import generateTokenAndSetCookie from "../utils/jwt.js";
import { sendMail } from "../nodemailer/nodemailer.js";

const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      throw new Error("All fields are required");
    }

    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString();
    const user = new User({
      username,
      email,
      password: hashedPassword,
      verificationToken,
      verificationTokenExpires: Date.now() + 24 * 60 * 60 * 1000,
    });
    const createdUser = await user.save();

    //jwt
    generateTokenAndSetCookie(res, user._id);

    sendMail(email, {purpose: "VerifyEmail", token: verificationToken});

    return res
      .status(201)
      .json({ success: true, 
        user: createdUser
        });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ success: false, message: err.message });
  }
};

const login = async (req, res) => {
  res.send("Login route");
};

const logout = async (req, res) => {
  res.send("Register route");
};

const forgotPassword = (req, res) => {
  res.send("Register route");
};

export { register, login, logout, forgotPassword };
