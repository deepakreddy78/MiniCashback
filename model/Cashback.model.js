import mongoose from "mongoose"

const Cashback = new mongoose.Schema({
    userId: {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId
    },
    percentage: {
        type: Number,
        default: 10
    },
    status: {
        type: String,
        enum: ["pending", "approved"],
        default: "pending"
    }
})

export default mongoose.model("Cashback", Cashback)