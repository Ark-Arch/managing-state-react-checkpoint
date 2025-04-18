import { useState } from "react"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TaskContext } from "../../context/taskContext";

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
    const {appTasks, setAppTasks} = useContext(TaskContext)

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
            task.id = appTasks.length + 1
            task.isCompleted = false
            task.createdAt = Date.now()
            task.updatedAt = Date.now()

            setAppTasks([...appTasks, task])
            localStorage.setItem("my-tasks",JSON.stringify(appTasks))
            setStatus(STATUS.COMPLETED)
        } else {
            setStatus(STATUS.SUBMITTED)
        }
    }    
    function handleChange(event){
        setTask((prevTask) => {
            return {
                ...prevTask,
                [event.target.id]: event.target.value
            }
        })  
    }
    function handleTouched(event){
        setTouched((prevTask) => {
           return {
            ...prevTask,
            [event.target.id]:true
           } 
        });
    }
    function getErrors(demoTask){
        const result = {};
        if (!demoTask.taskName) {result.taskName = "A Task title is required"};
        if (!demoTask.description) {result.description="A Task description is required"}
        
        if (!demoTask.dueDate) 
            {result.dueDate="A Due Date is required"}
        else if (!isFutureDate(demoTask.dueDate)) {
            result.isFuture = "You can only select a future date as your due date"
        }
        return result;
    }
    function isFutureDate(date_string){
        const today = new Date();
        const selectDate = new Date(date_string);

        today.setHours(0)

        return selectDate > today
    }


    if (status === STATUS.COMPLETED) {
        return <h1>TASK SUCCESSFULLY ADDED: <Link to='/task-list'>Back</Link></h1>
    }
    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="mb-4">Create New Task</h2>
                <Link to='/task-list'><button className="btn btn-primary px-4">Back</button></Link>
            </div>

            {!isValid && status === STATUS.SUBMITTED && (
                <div role="alert" style={{color:'red'}}>
                    <p>The following are required for a successful submission:</p>
                    <ul>
                        {
                            Object.keys(errors).map((key) => {
                                return <li key={key}>{errors[key]}</li>
                            })
                        }
                    </ul>
                </div>
            )}
            
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="taskName" className="form-label">Task Name</label>
                    <input type="text" className="form-control" id="taskName" placeholder="Enter task name" 
                            onChange={handleChange}
                            onBlur={handleTouched}/>
                    <p role="alert" style={{color:'red'}}>
                        {(touched.taskName || status === STATUS.SUBMITTED) && errors.taskName}
                    </p>
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" id="description" rows="3" placeholder="Enter task description"
                            onChange={handleChange}
                            onBlur={handleTouched}></textarea>
                    <p role="alert" style={{color:'red'}}>
                        {(touched.description || status === STATUS.SUBMITTED) && errors.description}
                    </p>
                </div>

                <div className="mb-3">
                    <label htmlFor="dueDate" className="form-label">Due Date</label>
                    <input type="date" className="form-control" id="dueDate"
                            onChange={handleChange}
                            onBlur={handleTouched}
                            />
                    <p role="alert" style={{color:'red'}}>
                        {(touched.dueDate || status === STATUS.SUBMITTED) && errors.dueDate}
                        {(touched.dueDate || status === STATUS.SUBMITTED) && errors.isFuture}
                    </p>
                </div>

                <button type="submit" className="btn btn-primary">Submit Task</button>
            </form>
        </div>
    )
}

export default TaskForm