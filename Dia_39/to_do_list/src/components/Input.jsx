import React from "react"
import {useState} from "react"

const Input = ({taskList, setTaskList}) => {
    const [input, setInput] = useState("");

    const handleAddtask =(e) => {
        e.preventDefault();
        setTaskList([...taskList, input])
        setInput("");
    }

  

    return(
        <>
            <form className='flex flex-row items-center gap-3 '>
                <input type="text"
                    className="borde rounded-lg py-1.5 px-2.5 text-lg"
                    placeholder="Adicione uma tarefa"
                    value ={input}
                    onChange={(e) => setInput(e.target.value)}/>
                <button onClick ={handleAddtask}
                        className="bg-green-400 text-white py-2 px-3.5 rounded-lg font-semibold hover:opacity-70"
                >Adicionar Tarefa</button>
            </form>
        </>
        
    )

}

export default Input
