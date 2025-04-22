import React from 'react'

const ConfirmModal = ({confirmDelete, taskName}) => {

    function handleCancel(){
        confirmDelete(false)
    }
    function handleDelete(){
        confirmDelete(true)
    }

    return (
        <div 
            className="modal fade" 
            id="confirmDeleteModal" 
            tabIndex="-1" 
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            aria-labelledby='confirmDeleteModalLabel'
            aria-hidden="true"
            >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id='confirmDeleteModalLabel'>Confirm Delete</h5>
                        <button 
                            type="button" 
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label='Close' 
                            onClick={handleCancel}></button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to delete the task <strong>{taskName || "this task"}</strong>?</p>
                    </div>
                    <div className="modal-footer">
                        <button 
                            type="button" 
                            className="btn btn-secondary" 
                            data-bs-dismiss="modal" 
                            onClick={handleCancel}>Cancel</button>
                        <button 
                            type="button" 
                            className="btn btn-danger" 
                            data-bs-dismiss="modal" 
                            onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmModal