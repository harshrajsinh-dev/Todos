import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SiteContext } from "../Context/SiteContext";

const TodoForm = () => {
  const navigation = useNavigate();
  const { setAllTodo } = useContext(SiteContext)
  const { register, handleSubmit, formState: { errors } } = useForm();


  const onSubmit = (data) => {
    axios
      .post(`${import.meta.env.VITE_BASE_URL}api/todo/create`, data, {
        headers: { 'Content-Type': 'application/json' }
      })
      .then((response) => {
        setAllTodo(prev => [...prev, response.data.todo]);

        navigation("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" backdrop-blur-2xl h-screen flex justify-center items-center bg-[#ebf8ff] rounded-2xl shadow-blue-500 absolute left-1/3">
      <div className="w-[450px] p-6  rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Create Todo</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <input
              type="text"
              {...register("userName", { required: "User Name is required" })}
              className="w-full p-2 border text-blue-900 rounded  mt-1"
              placeholder="Enter your name"
              value={localStorage.getItem("userName")}
              hidden
            />
            {errors.userName && <p className="text-red-500 text-sm">{errors.userName.message}</p>}
          </div>


          <div>
            <label className="font-medium text-blue-800">Todo Heading</label>
            <input
              type="text"
              {...register("todoHeading", { required: "Heading is required" })}
              className="w-full p-2 border text-blue-900 rounded mt-1"
              placeholder="Enter todo title"
            />
            {errors.todoHeading && <p className="text-red-500 text-sm">{errors.todoHeading.message}</p>}
          </div>

          <div>
            <label className="font-medium text-blue-800">Todo Body</label>
            <textarea
              {...register("todoBody", { required: "Description is required" })}
              className="w-full p-2 border text-blue-900 rounded mt-1"
              rows="3"
              placeholder="Enter todo description"
            />
            {errors.todoBody && <p className="text-red-500 text-sm">{errors.todoBody.message}</p>}
          </div>


          <div>
            <label className="font-medium text-blue-800">Todo ID</label>
            <input
              type="number"
              {...register("todoId", { required: "Todo ID is required" })}
              className="w-full p-2 border text-blue-900 rounded mt-1"
              placeholder="Unique ID"
            />
            {errors.todoId && <p className="text-red-500 text-sm">{errors.todoId.message}</p>}
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" {...register("isCompleted")} />
            <label className="font-medium text-blue-800">Completed?</label>
          </div>

          <div>
            <label className="font-medium text-blue-800">Creation Time</label>
            <input
              type="datetime-local"
              {...register("creationTime", { required: "Creation time is required" })}
              className="w-full p-2 border text-blue-900 rounded mt-1"
            />
            {errors.creationTime && <p className="text-red-500 text-sm">{errors.creationTime.message}</p>}
          </div>

          <div>
            <label className="font-medium text-blue-800">Deadline</label>
            <input
              type="date"
              {...register("deadLine", { required: "Deadline is required" })}
              className="w-full p-2 border text-blue-900 rounded mt-1"
            />
            {errors.deadLine && <p className="text-red-500 text-sm">{errors.deadLine.message}</p>}
          </div>

          <button
            type="submit"
            className="bg-blue-900 text-blue-200 hover:text-blue-900 hover:bg-blue-100 border hover:border-blue-900 py-2 rounded-xl transition"
          >
            Add Todo
          </button>

        </form>
      </div>
    </div>
  );
};

export default TodoForm;


