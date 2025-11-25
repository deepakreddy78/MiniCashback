import mongoose from "mongoose"

const Store = new mongoose.Schema({
    userId: {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId
    },
    items: {
        type: Array,
        required: true
    },
    purchaseAmount: {
        type: Number,
        required: true
    }
})

export default mongoose.model("Store", Store)