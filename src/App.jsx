import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <div className="min-h-screen bg-gray-700 flex flex-col items-center py-20">

      <h1 className="text-4xl font-semibold mb-10 text-center" >
         Redux Toolkit
      </h1>

      <div className="w-full max-w-4xl">
        <AddTodo />
        <Todos />
      </div>

    </div>
  )
}

export default App