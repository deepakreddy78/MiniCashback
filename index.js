import express from "express"
import mongoose from "mongoose"
import userRouter from "./router/user.router.js"


const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use('/user', userRouter)

app.get('/', (req, res) => {
    res.send("Hello World")
}
)

mongoose.connect("mongodb://localhost:27017/purchaseDB").then(() => {
    console.log("Database is connected")
})

app.listen(PORT, () => {
    console.log(`Server is running on the Port ${PORT}`)
})