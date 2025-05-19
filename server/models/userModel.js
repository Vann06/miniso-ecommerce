import mongoose from "mongoose";
import { use } from "react";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: Number,
        required: true,
    },
    rol: {
        type: Number,
        required: true,
    },
});

export default mongoose.model("User", userSchema);