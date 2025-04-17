import React from 'react'

const TaskOneLiner = ({id, taskName, dueDate}) => {

    return (
        <div className="list-group-item d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between py-3 border rounded shadow-sm mb-3">
            <div className="d-flex align-items-center gap-3 flex-wrap flex-md-nowrap">
                <span className="badge bg-primary px-3 py-2">#{id}</span>
                <div>
                <h5 className="mb-1">{taskName}</h5>
                <small className="text-muted">Due: {dueDate}</small>
                </div>
            </div>
            <div className="d-flex align-items-center gap-2 mt-3 mt-md-0">
                <button className="btn btn-outline-secondary btn-sm">More</button>
                <button className="btn btn-warning btn-sm">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
                <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="completedToggle1"/>
                <label className="form-check-label" for="completedToggle1">Completed</label>
                </div>
            </div>
        </div>
    )
}

export default TaskOneLiner