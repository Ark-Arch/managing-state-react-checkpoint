import React from 'react'
import TaskOneLiner from './TaskOneLiner'
import { Link } from 'react-router-dom'


const TaskList = ({tasks}) => {
    return (
        <>
            <div className="container my-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="mb-0">My To-Do List</h3>
                <Link to='/add-task'><button className="btn btn-primary px-4">Add</button></Link>
            </div>
            
            <div className="list-group">
                {
                    tasks.map((task) => {
                        return(
                        <TaskOneLiner key={task.id} taskName={task.taskName} dueDate={task.dueDate} id={task.id}/>
                        )
                    })
                }
            </div>
            </div>
        </>
    )
}

export default TaskList