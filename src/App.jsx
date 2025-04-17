import React from 'react'
import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'

import { tasks } from './assets/taskData'

function App() {
    return (
        <>
            <TaskList tasks={tasks}/>
        </>
    )
}

export default App