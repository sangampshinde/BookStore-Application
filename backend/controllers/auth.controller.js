import Role from "../models/Role.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs"
import { CreateError } from "../utilites/error.js";
import { CreateSuccess } from "../utilites/success.js";



export const register = async (req,res,next)=>{

    const role = await Role.find({role:"User"});
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password,salt);
    const newUser = new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        username:req.body.username,
        email:req.body.email,
        password:hashedPassword,
        roles:role,
    })
    await newUser.save();
    return next(CreateSuccess(200,"User created successfully!"));


};

export const login = async (req,res,next)=>{
    try {

        const user = await User.findOne({email: req.body.email})

        if(!user){
            // return res.status(404).send("User Not Found!"); 
            next(CreateError(404,"User Not Found"));
        }

        const isPasswordCorrect = await bcrypt.compare(req.body.password,user.password);

        if(!isPasswordCorrect){
            // return res.status(400).send("Password is incorrect!");
            return next(CreateError(400,"Password is incorrect"));
        }
        // return res.status(200).send();
        return next(CreateSuccess(200,"Login Success!"));
        
    } catch (error) {

        // return res.status(500).send("Something went wrong!");
        return next(CreateError(500,"something went wrong!"));
        
    }

};

