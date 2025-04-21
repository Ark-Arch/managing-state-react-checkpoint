import {React, useState, useEffect} from 'react'
import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'
import { Routes, Route } from 'react-router-dom'

import { TaskContext } from './context/taskContext'

import { tasks } from './assets/taskData'

function App() {
    const [appTasks, setAppTasks] = useState(()=>{
        const stored = localStorage.getItem("my-tasks");
        return stored ? JSON.parse(stored) : tasks
    })

    useEffect(()=>{
        addToLocalStorage(appTasks)
    }, [appTasks])

    function addToLocalStorage(neededTasks) {
        localStorage.setItem("my-tasks",JSON.stringify(neededTasks))
    }      

    return (
        <>
            <TaskContext.Provider value={{appTasks, setAppTasks}}>
                <Routes>
                    <Route path='/task-list' element={<TaskList/>}/>
                    <Route path='/add-task' element={<TaskForm/>}/>
                </Routes>
            </TaskContext.Provider>
        </>
    )
}

export default App