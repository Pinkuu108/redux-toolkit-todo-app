import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {

  const todos = useSelector((state) => state.todo.todos)
  const dispatch = useDispatch()

  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState("")

  const handleEdit = (todo) => {
    setEditId(todo.id)
    setEditText(todo.text)
  }

  const handleSave = (id) => {
    dispatch(updateTodo({ id, text: editText }))
    setEditId(null)
  }

  return (

    <div className="w-full px-40">

      <h2 className="text-center mb-4 text-lg">Todos</h2>

      <ul className="space-y-4">

        {todos.map((todo) => (

          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-900 text-white px-6 py-4 rounded-lg"
          >

            {editId === todo.id ? (

              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="bg-gray-700 px-3 py-2 rounded"
              />

            ) : (

              <span>{todo.text}</span>

            )}

            <div className="flex gap-2">

              {editId === todo.id ? (

                <button
                  onClick={() => handleSave(todo.id)}
                  className="bg-green-500 px-4 py-2 rounded-lg"
                >
                  Save
                </button>

              ) : (

                <button
                  onClick={() => handleEdit(todo)}
                  className="bg-yellow-500 px-4 py-2 rounded-lg"
                >
                  Edit
                </button>

              )}

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-500 px-4 py-2 rounded-lg"
              >
                Delete
              </button>

            </div>

          </li>

        ))}

      </ul>

    </div>

  )
}

export default Todos