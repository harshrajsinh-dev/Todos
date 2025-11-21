import express from "express";
import { CreateUser, ListUser, UpdateUser, DeleteUser, LoginUser } from "../Controllers/UserController.js";

const UserRouter = new express.Router();

UserRouter.post("/create", CreateUser);
UserRouter.get("/list", ListUser);
UserRouter.put("/update/:id", UpdateUser);
UserRouter.delete("/delete/:id", DeleteUser);
UserRouter.post("/login", LoginUser)

export default UserRouter;