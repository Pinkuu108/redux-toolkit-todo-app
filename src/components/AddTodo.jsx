import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {

  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }

  return (

    <form
      onSubmit={addTodoHandler}
      className="flex justify-center gap-4 mb-8"
    >

      <input
        type="text"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-96 px-4 py-3 rounded-lg border border-indigo-500 bg-gray-800 text-white focus:outline-none"
      />

      <button
        type="submit"
        className="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
      >
        Add Todo
      </button>

    </form>

  )
}

export default AddTodo