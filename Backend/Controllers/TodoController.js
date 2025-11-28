import TodoModel from "../Models/TodoModel.js";

// Create todo
const CreateTodo = async (req, res) => {
    try {
        console.log(req.body);
        const todo = await TodoModel.create(req.body);
        res.json({ success: true, message: "Todo created", todo });
    } catch (error) {
        res.json({ success: false, message: "Error creating todo", error: error.message });
    }
};

// List all todos
const ListTodo = async (req, res) => {
    try {
        console.log("created by harshraj")
        const todos = await TodoModel.find();
        res.json({ success: true, message: "Todo list fetched", todos });
    } catch (error) {
        res.json({ success: false, message: "Error fetching todo list", error: error.message });
    }
};

const UpdateTodo = async (req, res) => {
    try {
        // /api/todo/update/:id
        // /api/todo/update/20 -> id = 20
        const id = Number(req.params.id);  // convert to number
        console.log(req.body, id)
        const updatedTodo = await TodoModel.findOneAndUpdate(
            { todoId: id },             // match number with number
            req.body,
            { new: true }               // return updated doc
        );

        if (!updatedTodo) {
            return res.json({ success: false, message: "Todo not found" });
        }

        res.json({ success: true, message: "Todo updated", updatedTodo });
    } catch (error) {
        res.json({ success: false, message: "Error updating todo", error: error.message });
    }
};


// Delete todo
const DeleteTodo = async (req, res) => {
    try {
        // /api/todo/update/:id
        // /api/todo/update/20 -> id = 20
        // let { id } = req.params; // todoId from URL
        // id = parseInt(id)

        const id = parseInt(req.params.id)

        const deletedTodo = await TodoModel.findOneAndDelete({ todoId: id });

        if (!deletedTodo) {
            return res.json({ success: false, message: "Todo not found" });
        }

        res.json({ success: true, message: "Todo deleted", deletedTodo });
    } catch (error) {
        res.json({ success: false, message: "Error deleting todo", error: error.message });
    }
};  

export { CreateTodo, ListTodo, UpdateTodo, DeleteTodo };    