import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
dotenv.config();
import { user } from "../models/userSchema.js";

export const getUsers = async (req, res) => {
  try {
    const allUsers = await user.find();
    // Make sure to remove passwords from the user even if they're hashed
    res.status(200).json(allUsers); //skickar tillbaka alla users
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createUser = async (req, res) => {
  const signupUser = req.body;
  if (!signupUser.email && !signupUser.password) {
    return res.status(400).send({ error: "Data not formatted properly" });
  }
  const User = new user(signupUser);
  const salt = await bcrypt.genSalt(10);
  User.password = await bcrypt.hash(User.password, salt);

  User.save().then((doc) => res.status(201).send(doc));
};

export const login = async (req, res) => {
  const loginUser = req.body;
  const User = await user.findOne({ email: loginUser.email });

  if (!User)
    return res.status(400).json({ msg: `No account with this email found` });

  //if email is in database, compare the loginUser with the hashedPassword on our database to see if the passwords match (bcrypt will do this for us)
  const doesPasswordMatch = bcrypt.compareSync(
    loginUser.password,
    User.password
  ); //gives a boolean

  //if the passwords do not match
  if (!doesPasswordMatch)
    return res.status(400).json({ msg: `Passwords did not match` });
  //if the passwords match, send back the existingUser to the frontEND
  else {
    // res.json(User);
    const token = jwt.sign(
      { email: User.email, userId: User._id, firstname: User.firstname },
      process.env.TOKEN_KEY,
      { expiresIn: "1h" }
    );
    // return res.json(User)
    return res.status(200).json({ msg: `logged in`, token: token, user: User });
  }
};

export const update = async (req, res) => {
  const CVname = req.body.cvname;
  const img = req.body.profilepicture;
  const intro = req.body.introduction;
  const id = req.body._id;

  try {
    await user.findById(id, (error, userToUpdate) => {
      userToUpdate.cvname = CVname;
      userToUpdate.profilepicture = img;
      userToUpdate.introduction = intro;
      userToUpdate.save();
    });
  } catch (err) {
    console.log(err);
  }
  res.send("updated");
};

const verifyJwt = async (req, res, next) => {
  try {
    const decoded = jwt.verify(req.body.token, process.env.TOKEN_KEY);
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Auth failed",
    });
  }
};
