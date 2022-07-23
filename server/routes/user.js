import express from "express";
const router = express.Router()

import UserController from '../controllers/userController.js'

import checkUserAuth from '../middleware/auth-middleware.js'



// Register Route
// @ /api/auth/register

router.post('/register', UserController.userregister)


// Login Route
// @ /api/auth/login
router.post('/login', UserController.userlogin)





export default router