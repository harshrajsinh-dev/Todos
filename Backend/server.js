import { configDotenv } from "dotenv"
import express from "express"
import connectDb from "./Config/ConnectDb.js"
import UserRouter from "./Routes/UserRouter.js"
import cors from "cors"
import TodoRouter from "./Routes/TodoRouter.js"

const app = express()

// configuration
configDotenv()
connectDb()


// Routes
app.use(express.json());
app.use(cors())
// app.use(express.urlencoded({ extended: true }));

app.use("/api/user", UserRouter)
app.use("/api/todo", TodoRouter)

app.get("/", (req, res) => {
    console.log("get api at / end point")
    res.send("api working")
})

app.listen(process.env.PORT, () => {
    console.log("get api at /")
})