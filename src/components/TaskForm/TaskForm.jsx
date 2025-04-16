import { useState } from "react"

// role: this component is to add or edit a task

const emptyTask = {
    taskName: "",
    description: "",
    dueDate: ""
};

const STATUS = {
    IDLE: "IDLE",
    SUBMITTED: "SUBMITTED",
    SUBMITTING: "SUBMITTING",
    COMPLETED: "COMPLETED"
}

const TaskForm = () => {
    const [task, setTask] = useState(emptyTask)
    const [status, setStatus] = useState(STATUS.IDLE)
    const [touched, setTouched] = useState({})

    // form validation
    const errors = getErrors(task);
    const isValid = Object.keys(errors).length === 0;

    function handleSubmit (event){
        // to remove the default behaviour of the submit event -> which is to reload the entire page: this is bad UX
        // but for the above to work, the handleSubmit must be in the <form> tag
        event.preventDefault();
        setStatus(STATUS.SUBMITTING);
        if (isValid){
            
        }

    }    

    function getErrors(){
        return ""
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Create New Task</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                <label htmlFor="taskName" className="form-label">Task Name</label>
                <input type="text" className="form-control" id="taskName" placeholder="Enter task name"/>
                </div>

                <div className="mb-3">
                <label htmlFor="taskDescription" className="form-label">Description</label>
                <textarea className="form-control" id="taskDescription" rows="3" placeholder="Enter task description"></textarea>
                </div>

                <div className="mb-3">
                <label htmlFor="dueDate" className="form-label">Due Date</label>
                <input type="date" className="form-control" id="dueDate"/>
                </div>

                <button type="submit" className="btn btn-primary">Submit Task</button>
            </form>
        </div>
    )
}

export default TaskForm