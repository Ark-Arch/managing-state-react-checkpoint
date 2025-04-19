import React from 'react'
import { useContext } from 'react'
import { TaskContext } from '../../context/taskContext'
const TaskItem = ({taskId}) => {
    const {appTasks, setAppTasks} = useContext(TaskContext)

    const task = appTasks.find((curTask) => curTask.id === taskId);

    const id = task.id
    const taskName = task.taskName
    const dueDate = task.dueDate
    const isCompleted = task.isCompleted


    function isDeadlinePassed (date_string){
        const today = new Date();
        const selectDate = new Date(date_string);

        today.setHours(0)

        return selectDate < today
    }

    function handleToggle(event){
        const toggleValue = event.target.checked
        console.log(appTasks)
        const newTasks = appTasks.map((curTask) => {
            if (curTask.id === id) {
                return {...curTask, isCompleted: toggleValue}
            }
            return curTask
        })

        setAppTasks(newTasks)
    }

    function handleDelete(event){
    }

    return (
        <div className="list-group-item d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between py-3 border rounded shadow-sm mb-3">
            <div className="d-flex align-items-center gap-3 flex-wrap flex-md-nowrap">
                <span className="badge bg-primary px-3 py-2">#{id}</span>
                <div>
                <h5 className={`mb-1 ${isCompleted ? "text-decoration-line-through text-success":isDeadlinePassed(dueDate)?"text-decoration-line-through text-danger":""}`}>
                    {taskName}
                    {isCompleted && <span className="badge bg-success ms-2">Completed</span>}
                    {!isCompleted && isDeadlinePassed(dueDate) && <span className="badge bg-danger ms-2">DUE DATE PASSED</span>}
                    </h5>
                <p className={`card-text text-muted mb-2 ${isCompleted || isDeadlinePassed(dueDate) ?"text-decoration-line-through":""}`}>{task.description}</p>
                <small className="text-muted">Due: {!isDeadlinePassed(dueDate)?dueDate:`date already passed (${dueDate})`}</small>
                </div>
            </div>
            <div className="d-flex align-items-center gap-2 mt-3 mt-md-0">
                <button className="btn btn-warning btn-sm">Edit</button>
                <button className="btn btn-danger btn-sm" onClick={handleDelete}>Delete</button>
                <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id={`completedToggle${id}`}
                        onChange={handleToggle}/>
                </div>
            </div>
        </div>
    )
}

export default TaskItem