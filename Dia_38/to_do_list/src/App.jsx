import { useState } from 'react'
import './App.css'
import Input from "./components/Input";

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
      <h1> Quadra de tarefas.</h1>
      <Input/>
    </>
    
  )
}

export default App
