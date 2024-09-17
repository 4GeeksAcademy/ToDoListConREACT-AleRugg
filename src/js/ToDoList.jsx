import React, { useState, useEffect } from "react";
import { BsFillEraserFill } from "react-icons/bs";



/// pendientes: arreglar que se vean las viñetas quitando el flex pero acomodando que queden los iconos del lado derecho sin moverse...
/// preguntas a irio y gaston: como uso position relative y absolute para los iconos 


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
            setInputValue(""); // Limpia el input despues de la interaccion
        }


    }

    useEffect(()=> {
        if(tasks.length == 10) {
            setError(true)
            console.log("funciona") // alerta de maximas tareas diarias (10)
        }

        else setError(false)
    })

    let maxLength = 100;

    useEffect(() => {
        if( inputValue.length == maxLength) { // alerta de maximos caracateres
            setError2(true)
        }
        else {setError2(false)}
        
       
    })

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index); // borrar articulos de la lista 
        setTasks(newTasks)}; 

    return (

        <div className="container toDoWrapper">

            <div className="card bg-dark cont" >
                <div className=" d-flex justify-content-center align-items-center mt-2">
                    <div className="maxAlerts">
                    <input
                        type="text"
                        placeholder="Añade tu tarea y pulsa Enter para añadirla a la lista..."
                        value={inputValue}
                        onChange={inputHandler}
                        onKeyDown={handlerKeyDown}
                        disabled={tasks.length >= 10}
                        maxLength={100}
                          
                    />
                    
                    
                    { error && <span className=" mxLength">Solo puedes añadir 10 tareas a tu lista!</span>}
                    { error2 && <span className=" maxArticles">Tus tareas pueden tener como maximos 100 caracteres, lo siento!</span>}
                    </div>


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
                                        <BsFillEraserFill className="eraserIcon" onClick={() => deleteTask(index)} />                                    
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