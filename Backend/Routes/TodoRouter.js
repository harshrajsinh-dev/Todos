import express from "express";
import { CreateTodo, ListTodo, UpdateTodo, DeleteTodo } from "../Controllers/TodoController.js";

const TodoRouter = new express.Router();

TodoRouter.post("/create", CreateTodo);
TodoRouter.get("/list", ListTodo);
TodoRouter.put("/update/:id", UpdateTodo);
TodoRouter.delete("/delete/:id", DeleteTodo);

export default TodoRouter;