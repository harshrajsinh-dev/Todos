import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    userName: {
        type: String
    },

    todoHeading: {
        type: String,
        required: true,
        default: "",
    },

    todoBody: {
        type: String,
        required: true,
        default: "",
    },

    todoId: {
        type: Number,
        required: true,
        unique: true,
    },

    isCompleted: {
        type: Boolean, // true / false
        default: false
    },

    creationTime: {
        type: Date,
        default: Date.now()
    },

    deadLine: {
        type: Date,
        default: () => {
            const now = new Date()
            now.setDate(now.getDate() + 7)
            return now
        }
    }
})

const TodoModel = mongoose.models.todo || new mongoose.model("todo", TodoSchema)

export default TodoModel