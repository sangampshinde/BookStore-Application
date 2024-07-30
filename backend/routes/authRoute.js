import express from 'express';
import { login, register } from '../controllers/auth.controller.js';

const router = express.Router();

// Register routes
 router.post("/register",register);

//  login routes
router.post("/login",login);




export default router;



