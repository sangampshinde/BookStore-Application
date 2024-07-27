import mongoose from "mongoose";


const User = mongoose.Schema({

    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    profileImage :{
        type: String,
        required:false,
        default:"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
    },
    isAdmin:{
        type: Boolean,
        default: false

    }
    // Will add role

    },
    {
        timestamps: true,
    }
);
