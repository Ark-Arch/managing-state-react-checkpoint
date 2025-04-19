import React from 'react'
import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'
import { Routes, Route } from 'react-router-dom'

import { tasks } from './assets/taskData'

function App() {
    return (
        <>
            <Routes>
                <Route path='/task-list' element={<TaskList tasks={tasks}/>}/>
                <Route path='/add-task' element={<TaskForm/>}/>
            </Routes>
        </>
    )
}

export default App