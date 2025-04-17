import React from 'react'
import TaskOneLiner from './TaskOneLiner'


const TaskList = ({tasks}) => {
    return (
        <>
            <div className="container my-5">
            <h3 className="mb-4">My To-Do List</h3>
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