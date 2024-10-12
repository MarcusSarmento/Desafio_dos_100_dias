import { useState, useEffect} from 'react'
import './App.css'

function App() {
   const[time, setTime] = useState(0);
   const[running, setRunning] = useState(false);

    useEffect(() => 
  {
    let interval;
    if(running){
      interval =setInterval(()=> {setTime((prevTime) => prevTime + 10);}, 10)
    }
    else{
      clearInterval(interval);// limpando o intervalo de tempo
    }
    return () => clearInterval(interval)
  },[running]);

  return (
    <>
      <h1>Timer</h1>
      <div>
        <span>{("0" + Math.floor((time/60000)%60))}:</span>
        <span>{("0" + Math.floor((time/1000)%60))}:</span>
        <span>{("0" + ((time/10)%1000))}:</span>
      </div>
      <div>
        {running ? (<button onClick={() => (setRunning(false))}>Stop</button>
        ):
        (<button onClick={() => (setRunning(true))}>Start</button>)}
        <button onClick={() => {setRunning(0);setTime(0);
        }}>Reset</button>
      </div>
    </>
  )
}

export default App
