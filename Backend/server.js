import { configDotenv } from "dotenv"
import express from "express"
import connectDb from "./Config/ConnectDb.js"
import UserRouter from "./Routes/UserRouter.js"

const app = express()

// configuration
configDotenv()
connectDb()

// Routes
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use("/api/User", UserRouter)

app.get("/", (req, res) => {
    console.log("get api at / end point")   
    res.send("api working")
})

app.listen(process.env.PORT, () => {
    console.log("get api at /")
})