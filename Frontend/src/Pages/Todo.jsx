import React from 'react'
import { useParams } from 'react-router-dom'

const Todo = () => {
    const { todoId } = useParams()
    return (
        <div>Todo {todoId}</div>
    )
}

export default Todo