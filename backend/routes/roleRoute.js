import express from "express";
import Role from "../models/Role.js";

const router = express.Router();

// Create a new Role in the database
router.post("/create", async (req, res, next) => {
  try {
    if (req.body.role && req.body.role !== "") {
      const newRole = new Role(req.body);
      await newRole.save();
      return res.send("Role Created");
    } else {
      return res.status(400).send("Bad Request");
    }
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
});

// Upadte Role in database
router.put("/update/:id",async(req,res,next) => {
  try {

    const role = await Role.findById({_id: req.params.id});
    if(role){
      const newData = await Role.findByIdAndUpdate(
        req.params.id,
        {$set: req.body},
        {new: true}
      );
      res.status(200).send("Role updated");
    }else{
      res.status(404).send("Role not found!");
    }

    
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }

})

export default router;
