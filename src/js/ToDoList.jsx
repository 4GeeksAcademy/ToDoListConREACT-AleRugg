import React, { useState, useEffect } from "react";
import { BsFillEraserFill } from "react-icons/bs";


const ToDoList = () => {

    const [tasks, setTasks] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [error, setError] = useState(false)
    const [error2, setError2] = useState(false)

   


    const inputHandler = (e) => {

        setInputValue(e.target.value)
    }

    const handlerKeyDown = (e) => {

        if (e.key === "Enter" && inputValue.trim() !== "") {

            setTasks([...tasks, inputValue])
            setInputValue(""); // Limpia el input
        }


    }

    useEffect(()=> {
        if(tasks.length == 10) {
            setError(true)
            console.log("funciona") // con este hacemos una alerta  de lmite de 10 tareas
        }

        else setError(false)
    })

    let maxLength = 100;

    useEffect(() => {
        if( inputValue.length == maxLength) {
            setError2(true)
        }
        else {setError2(false)}
        
         // copn este hacemos una alerta de caracteres maximos dentro del input
    })

    return (

        <div className="container toDoWrapper">

            <div className="card bg-dark cont" >
                <div className=" d-flex justify-content-center align-items-center mt-2">
                    <input
                        type="text"
                        placeholder="Añade tu tarea y pulsa Enter para añadirla a la lista..."
                        value={inputValue}
                        onChange={inputHandler}
                        onKeyDown={handlerKeyDown}
                        disabled={tasks.length >= 10}
                        maxLength={100}
                          
                    />
                    { error && <span className="bg-danger">"Hola funciono como alerta para los 10 li"</span>}
                    { error2 && <span className="bg-danger">"Hola funciono como alerta para los caracteres"</span>}

                </div>
                <h4 className="title">Lista de tareas por hacer:</h4>

                <div className="card-body">
                    <ul>
                        {tasks.map((li, index) => {

                            return (

                                <li className="text-white liGenerado"
                                    value={li.value}
                                    key={index}
                                    
                                >
                                    {li}                                    
                                        <BsFillEraserFill className="eraserIcon" />                                    
                                </li>

                            )
                        })}
                    </ul>
                    <div className="card.footer text-white footer">Llevas {tasks.length} / 10 tareas agregadas a tu lista.</div>
                </div>
            </div>
        </div>
    )
}

export { ToDoList }