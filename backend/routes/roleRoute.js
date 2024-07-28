import express from "express";
import { createRole, deleteRole, getAllRoles, updateRole } from "../controllers/role.controller.js";

const router = express.Router();

// Create a new Role in the database
router.post("/create",createRole );

// Upadte Role in database
router.put("/update/:id",updateRole);

// Get All Roles from the database
router.get("/getAll",getAllRoles);

// delete role from database
router.delete("/delete/:id",deleteRole);

export default router;
