import TaskItem from '../TaskItem/TaskItem'
import { Link } from 'react-router-dom'
import { TaskContext } from '../../context/taskContext'
import { useContext, useState } from 'react'
import ConfirmModal from '../ConfirmModal/ConfirmModal'

const TaskList = () => {
    const {appTasks, setAppTasks} = useContext(TaskContext)

    const [selectedTask, setSelectedTask] = useState(null)
    const [showModal, setShowModal] = useState(false)

    function updateTasks (idToDelete) {
        const newTasks = appTasks.filter((currTask) => currTask.id !== idToDelete)
        const resetTasks = newTasks.map((task, index) => ({...task, id:index+1}))
        setAppTasks(resetTasks)
    }

    function openDeleteModal(task){
        setSelectedTask(task);
    }

    function handleConfirmDelete(isAgreed){
        if (isAgreed && selectedTask) {
            updateTasks(selectedTask.id)
        }
    }

    return (
        <>
            <div className="container my-2">
                <div className="d-flex justify-content-between align-items-center mb-4 bg-white sticky-top py-3 px-3 border-bottom" style={{ zIndex: 1020 }}>
                    <h3 className="mb-0">My To-Do List</h3>
                    <Link to='/add-task'><button className="btn btn-primary px-4">Add</button></Link>
                </div>
            { appTasks.length === 0 ? 
                <div className="d-flex justify-content-center align-items-center bg-light rounded shadow-sm p-5 my-5">
                    <h2 className="fw-bold text-center m-0" style={{ fontFamily: 'cursive', color: 'black' }}>
                        Manage your To-Dos
                        </h2>
                    </div>

                
                :           
                <div className="list-group">
                    {
                        appTasks.map((task) => {
                            return(
                            <TaskItem key={task.id} 
                                          taskId={task.id}
                                          openDeleteModal={openDeleteModal}
                                          />
                            )
                        })
                    }
                </div>
            }
            </div>
            <ConfirmModal
                confirmDelete={handleConfirmDelete}
                taskName = {selectedTask?.taskName}
            />
        </>
    )
}

export default TaskList