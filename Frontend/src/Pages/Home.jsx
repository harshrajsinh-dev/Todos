import React, { useState } from 'react';
import TodoForm from '../Components/TodoForm';
import ListTodo from '../Components/ListTodo';

const Home = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="min-h-screen p-5 flex flex-col">
      <button
        onClick={() => setShow(!show)}
        className="z-60 mt-3 px-4 h-9 w-fit rounded-md bg-blue-500 text-white font-bold hover:bg-blue-600 transition"
      >
        {show ? 'Hide' : 'Show'}
      </button>

      <ListTodo />


      {show && <div className="fixed inset-0 backdrop-blur-md bg-black/30 z-40" />}

      {show &&
        < div className="fixed inset-0 z-50 flex items-center justify-center">
          <TodoForm />
        </div>
      }


      <footer className="mt-auto pt-6 text-center text-sm text-gray-500">
        Designed &amp; Developed by{' '}
        <span className="font-semibold text-gray-700">
          HARSHRAJSINH GOHIL
        </span>
      </footer>
    </div >
  );
};

export default Home;
