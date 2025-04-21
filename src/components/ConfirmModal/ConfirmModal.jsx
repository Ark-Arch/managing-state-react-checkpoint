import React from 'react'

const ConfirmModal = ({confirmDelete}) => {

    function confirmedDelete(){
        confirmDelete(true)
    }

    return (
        <div>
            <div className="modal fade" id="confirmDeleteModal" tabIndex="-1" aria-labelledby="confirmDeleteLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="confirmDeleteLabel">Confirm Delete</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body text-center">
                    <p className="fw-bold">Are you sure you want to delete this task?</p>
                </div>
                <div className="modal-footer d-flex justify-content-between">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-danger" onClick={confirmedDelete} data-bs-dismiss="modal">Yes, Delete</button>
                </div>
                </div>
            </div>

            </div>
        </div>


    )
}

export default ConfirmModal