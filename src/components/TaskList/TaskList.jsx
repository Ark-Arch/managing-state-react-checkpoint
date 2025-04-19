import {React, useState, useEffect} from 'react'
import TaskItem from '../TaskItem/TaskItem'
import { Link } from 'react-router-dom'


const TaskList = () => {
    const [tasks, setTasks] = useState([])

    useEffect(()=>{
        const savedTasks = retrieveFromLocalStorage()
        setTasks(savedTasks)
    }, [])

    function retrieveFromLocalStorage(){
        return JSON.parse(localStorage.getItem('my-tasks')) || [];
    }

    return (
        <>
            <div className="container my-2">
                <div className="d-flex justify-content-between align-items-center mb-4 bg-white sticky-top py-3 px-3 border-bottom" style={{ zIndex: 1020 }}>
                    <h3 className="mb-0">My To-Do List</h3>
                    <Link to='/add-task'><button className="btn btn-primary px-4">Add</button></Link>
                </div>
                
                <div className="list-group">
                    {
                        tasks.map((task) => {
                            return(
                            <TaskItem key={task.id} 
                                          task={task}/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default TaskList