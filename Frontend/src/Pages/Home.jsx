import React, { useState } from 'react'
import TodoForm from '../Components/TodoForm'
import ListTodo from '../Components/ListTodo'

const Home = () => {

  const [show, setShow] = useState(false);

  return (
    <div><button className='mt-3 h-9 w-18 rounded-md  bg-blue-300' onClick={ () => {

      setShow(!show);

    }}>
        { show ? "Hide" : "Show"}
    </button>
      { show ? <TodoForm /> : <></> }
      <ListTodo />
    </div>

  )
}

export default Home