import React, { useEffect, useReducer, useState } from 'react'
import TaskForm from '../components/TaskForm'
import TaskTable from '../components/TaskTable'
import FilterBar from '../components/FilterBar'
import { reducer, initialState } from '../context/TaskReducer'

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    const localData = localStorage.getItem('tasks')
    return localData ? JSON.parse(localData) : initialState
  })

  const [editTask, setEditTask] = useState(null)
const [darkMode, setDarkMode] = useState(() => {
  const saved = localStorage.getItem('theme')
  if (saved) return saved === 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
})


  // Toggle dark mode
  const toggleDarkMode = () => {
    const newTheme = !darkMode
    setDarkMode(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', newTheme)
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state))
  }, [state])

  useEffect(() => {
    // Apply saved theme on mount
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const handleEdit = (task) => {
    setEditTask(task)
  }

  return (
    <div className="min-h-screen p-4 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-center w-full">Task Management Dashboard</h1>
        <button
          onClick={toggleDarkMode}
          className="absolute top-4 right-4 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-sm"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      <TaskForm dispatch={dispatch} editTask={editTask} setEditTask={setEditTask} />
      <FilterBar state={state} dispatch={dispatch} />
      <TaskTable state={state} dispatch={dispatch} onEdit={handleEdit} />
    </div>
  )
}

export default Home
