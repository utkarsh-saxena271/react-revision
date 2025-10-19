import React, { useState } from 'react'
import CreateTodo from './Components/CreateTodo'
import ShowTodo from './Components/ShowTodo'

const App = () => {
  const [todo, setTodo] = useState([])
  return (
    <>
    <CreateTodo todo={todo} setTodo={setTodo} />
    <ShowTodo todo={todo} setTodo={setTodo} />
    </>
  )
}

export default App