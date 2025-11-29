import React from 'react'
import { SiteContext } from '../Context/SiteContext';

const ListTodo = () => {
    const { allTodo } = React.useContext(SiteContext);
    console.log(allTodo)
    return (
        <div>
            {
                allTodo && allTodo.map((todo) => {
                    console.log(todo)
                    return (
                        <div key={todo._id}>
                            <h3>{todo.todoId}</h3>
                            <h3>{todo.todoHeading}</h3>
                            <p>{todo.todoBody}</p>
                            <p>{todo.isCompleted ? <>completed</> : <>incomplete</>}</p>
                            <p>{todo.creationTime}</p>
                            <p>{todo.deadLine}</p>
                            <hr />  
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ListTodo 