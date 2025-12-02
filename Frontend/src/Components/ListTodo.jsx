    
    import React, { useContext } from "react";
import { SiteContext } from "../Context/SiteContext";

const ListTodo = () => {
  const { allTodo } = useContext(SiteContext);

  if (!allTodo || allTodo.length === 0) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-blue-200 text-lg">No Todos Available</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {allTodo.map((todo) => (
        <div
          key={todo._id}
          className="bg-blue-100 rounded-xl border border-blue-500 shadow-md hover:shadow-xl hover:bg-blue-200 transition-shadow duration-300 p-5 flex flex-col justify-between">

          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-blue-500">
            {todo.todoId}
            </span>

            <span
              className={`text-xs px-3 py-1 rounded-full font-medium
                ${todo.isCompleted
                  ? "bg-blue-200 text-blue-600"
                  : "bg-blue-600 text-blue-200"
                }`}
            >   
              {todo.isCompleted ? "Completed" : "Incomplete"}
            </span>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-blue-700 mb-1">
              {todo.todoHeading}
            </h3>
            <p className="text-blue-600 text-sm line-clamp-3">
              {todo.todoBody}
            </p>
          </div>

          <div className="mt-4 text-xs text-blue-500 space-y-1">
            <p>
              Created:{" "}
              {new Date(todo.creationTime).toLocaleDateString()}
            </p>
            <p>
              Deadline:{" "}
              {new Date(todo.deadLine).toLocaleDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>

  );
};

export default ListTodo;
