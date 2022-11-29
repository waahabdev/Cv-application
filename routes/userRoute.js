import express from 'express'
import jwt from 'jsonwebtoken'
import {user} from '../models/userSchema.js'
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
dotenv.config();
const router = express.Router()
import {getUsers, createUser, login, update} from '../controllers/userController.js'

router.get('/', getUsers)

router.post('/signup', createUser)

router.post("/login", login);

router.put("/update", update );


export default router;