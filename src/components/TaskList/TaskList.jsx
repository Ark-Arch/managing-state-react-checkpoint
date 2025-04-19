import {React, useState, useEffect} from 'react'
import TaskItem from '../TaskItem/TaskItem'
import { Link } from 'react-router-dom'
import { TaskContext } from '../../context/taskContext'
import { useContext } from 'react'


const TaskList = () => {
    const [tasks, setTasks] = useState([])
    const {appTasks} = useContext(TaskContext)

    useEffect(()=>{
        const savedTasks = retrieveFromLocalStorage()
        setTasks(savedTasks)
    }, [appTasks])

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
                                          taskId={task.id}/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default TaskList