import {React, useState, useEffect} from 'react'
import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'
import { Routes, Route } from 'react-router-dom'

import { tasks } from './assets/taskData'

function App() {
    const [appTasks, setAppTasks] = useState(tasks)

    useEffect(()=>{
        addToLocalStorage(appTasks)
    }, [appTasks])

    function addToLocalStorage(neededTasks) {
        localStorage.setItem("my-tasks",JSON.stringify(neededTasks))
    }      

    return (
        <>
            <Routes>
                <Route path='/task-list' element={<TaskList tasks={appTasks}/>}/>
                <Route path='/add-task' element={<TaskForm appTasks={appTasks}/>}/>
            </Routes>
        </>
    )
}

export default App