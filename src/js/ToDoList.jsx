import React, { useState, useEffect } from "react";
import { BsFillEraserFill } from "react-icons/bs";






const ToDoList = () => {

    const [tasks, setTasks] = useState([])
    const [inputValue, setInputValue] = useState("")



const alerts = () => {
    if(tasks.length >= 10) {
       console.log( alert("Listo"))
    }
}


    const inputHandler = (e) => {

        setInputValue(e.target.value)
    }

    const handlerKeyDown = (e) => {

        if (e.key === "Enter" && inputValue.trim() !== "" ) {

            setTasks([...tasks, inputValue])
            setInputValue(""); // Limpia el input

        }


    }



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
                       
                       
                    />

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
                                        {li} <div>     <BsFillEraserFill className="eraserIcon" /></div>
                                    </li>
                                
                            )
                        })}
                    </ul>
                    <div className="card.footer text-white">Llevas {tasks.length} / 10 tareas agregadas a tu lista.</div>
                </div>
            </div>
        </div>
    )}

export { ToDoList }