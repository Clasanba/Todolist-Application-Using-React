import React, { useRef, useState } from "react";
import { createRoutesFromChildren } from "react-router";


const Home = () => {
    const [tasks, setTasks] = useState([]) 
    const inputRef = useRef(); 

    const onAddButtonClick = (e) => {
        e.preventDefault(); 

        const taskTitle = inputRef.current.value; 
        if (taskTitle === "") { return }  
        setTasks([...tasks, taskTitle]); 
        inputRef.current.value = ""; 
    }
    const onDeleteButtonClick = (position) => { 
        tasks.splice(position, 1); 
        setTasks([...tasks]) 
    }


    return ( 
       <> 
       
       <div className="container">
        <div>
            <h1 className="fw-semibold">¿Qué tengo que hacer hoy?</h1>
        </div>
        <div>
            <form onSubmit={onAddButtonClick} className="input-group mb-3">
                <input ref={inputRef} type="text" className="form-control text fw-semibold" aria-label="Text input with segmented dropdown button" />
            </form>
        </div>
            {tasks.length === 0
                ? (<span>No hay tareas, añadir tareas</span>) 
                : tasks.map((taskElement, i) => {
                    return (<li key={i}>{taskElement}<button type="button" className="fa-regular fa-trash-can btn-delete" aria-label="Delete" onClick={() => onDeleteButtonClick(i)}></button></li>) 
                })
            }
            
        </div>
        </>
    );
};

export default Home;


