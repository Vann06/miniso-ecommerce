import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
        default: "https://res.cloudinary.com/dxjrdqbio/image/upload/v1744949150/recent-2_etrtru.jpg",
    },
    category: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        default: 0,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
    
});

export default mongoose.model("Product", productSchema);