import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
    id_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    id_product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
});

export const Favorite = mongoose.model("Favorite", favoriteSchema);