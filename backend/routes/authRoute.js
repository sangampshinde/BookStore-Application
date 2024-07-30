import express from 'express';
import { register } from '../controllers/auth.controller.js';

const router = express.Router();

// Register routes
 router.post("/register",register);

//  login routes




export default router;



