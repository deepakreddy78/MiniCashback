import mongoose from "mongoose";

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,   
    },
    password: {
        type: String,     
    },
    amountAfterCashback: {
        type: Number,
        default: 0
    }
})

export default mongoose.model("User", User);