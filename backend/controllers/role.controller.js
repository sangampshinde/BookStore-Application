import Role from "../models/Role.js";
import { CreateError } from "../utilites/error.js";
import { CreateSuccess } from "../utilites/success.js";

export const createRole = async (req, res, next) => {
  try {
    if (req.body.role && req.body.role !== "") {
      const newRole = new Role(req.body);
      await newRole.save();
      // return res.send("Role Created");
      return next(CreateSuccess(200,"Role Created"));

    } else {
      // return res.status(400).send("Bad Request");
      return next(CreateError(200,"Bad Request"));
    }
  } catch (error) {
    // return res.status(500).send("Internal Server Error");
    return next(CreateError(500,"Internal Server Error"));
  }
};

export const updateRole = async (req, res, next) => {
  try {
    const role = await Role.findById({ _id: req.params.id });
    if (role) {
      const newData = await Role.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      // res.status(200).send("Role updated");
      return next(CreateSuccess(200,"Role updated"));
    } else {
      // res.status(404).send("Role not found!");
      return next(CreateError(404,"Role not found!"));
    }
  } catch (error) {
    // return res.status(500).send("Internal Server Error");
    return next(CreateError(500,"Internal Server Error"));
  }
};

export const getAllRoles = async (req, res, next) => {
    try {
      const roles = await Role.find({}); // Use Role.find to query the database
      res.status(200).send(roles);
    } catch (error) {
      // return res.status(500).send("Internal Server Error");
      return next(CreateError(500,"Internal Server Error"));
    }
  };

export const deleteRole = async(req, res, next) => {
    try {
        const roleId = req.params.id;
        const role = await Role.findById({_id : roleId});
        if(role){
            await Role.findByIdAndDelete(roleId);
            // res.status(200).send("Role deleted successfully!");
            return next(CreateSuccess(200,"Role deleted successfully!"));
        }else{
            // res.status(404).send("Role not found!");
            return next(CreateError(404,"Role not found!"));
        }

        
    } catch (error) {
        // return res.status(500).send("Internal Server Error");
        return next(CreateError(500,"Internal Server Error"));
    }
}

