import React, { useState, useEffect } from "react";
import { BsFillEraserFill } from "react-icons/bs";






const ToDoList = () => {

    const [tasks, setTasks] = useState(["perimera Tarea", "Segunda Tarea"])
    const [inputValue, setInputValue] = useState("")

    const inputHandler = (e) => {

        setInputValue(e.target.value)
    }

    const handlerKeyDown = (e) => {

        if (e.key == "Enter") {

            setTasks([...tasks, inputValue])
            setInputValue(""); // Limpia el input

        }


    }



    return (

        <div className="container toDoWrapper">

            <div className="card bg-dark cont" >
                <div className="card-header d-flex justify-content-center align-items-center mt-2">
            <input
                    type="text"
                    placeholder="Añade tu tarea y pulsa Enter para añadirla a la lista..."
                    value={inputValue}
                    onChange={inputHandler}
                    onKeyDown={handlerKeyDown}
                />
                </div>

                <div className="card-body">
                    <ul>

                        {tasks.map((li, index) => {

                            return (
                                <div>
                                <li className="text-white liGenerado"
                                    key={index}
                                    value={li.value}
                                >
                                    {li} <div>     <BsFillEraserFill className="eraserIcon" /></div>                                       
                                </li>
                           
</div>
                                
                            )
                        })}
                    </ul>
                </div>


            </div>





        </div>
    )
}

export { ToDoList }