import { React, useState } from 'react'
import './App.css'
import Input from "./components/Input";
import Board from "./components/Board";

function App() {
  const [taskList, setTaskList] = useState([]);

  console.log(taskList);
  return (
    <>
      <div className='flex flex-col items-center justify-center py-8 gap-4'>
        <h1> Quadra de tarefas.</h1>
        <Input taskList={taskList} setTaskList={setTaskList} />
      </div>
      <div className="flex flex-wrap gap-4 nt-4">
        {taskList.map((task, index) => (
          <Board 
          key={index}
          index={index}
          task={task}
          taskList={taskList}
          setTaskList={setTaskList}
          />
        ))}
      </div>    
      
  
    </>
  )
}

export default App
