import React from 'react'
import { GoTrashcan, GoCheck } from 'react-icons/go'

const Todo = ({ text, todos, setTodos, todo }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id))
  }
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          }
        }
        return item
      })
    )
  }

  return (
    <>
      <div className="todo">
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
          {text}
        </li>
        <button onClick={completeHandler} className="completed-btn">
          <GoCheck />
        </button>
        <button onClick={deleteHandler} className="trash-btn">
          <GoTrashcan />
        </button>
      </div>
    </>
  )
}

export default Todo
