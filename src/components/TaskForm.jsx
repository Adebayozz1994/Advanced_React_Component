import React, { useEffect, useState } from 'react'

const TaskForm = ({ dispatch, editTask, setEditTask }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('Medium')

  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title)
      setDescription(editTask.description)
      setPriority(editTask.priority)
    } else {
      setTitle('')
      setDescription('')
      setPriority('Medium')
    }
  }, [editTask])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title || !priority) {
      alert('Title and priority are required')
      return
    }

    const payload = {
      id: editTask ? editTask.id : Date.now(),
      title,
      description,
      priority,
      completed: editTask ? editTask.completed : false,
    }

    dispatch({
      type: editTask ? 'EDIT_TASK' : 'ADD_TASK',
      payload,
    })

    setEditTask(null)
    setTitle('')
    setDescription('')
    setPriority('Medium')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4 w-full">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        className="w-full p-2 border rounded bg-white dark:bg-gray-800 text-black dark:text-white"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        className="w-full p-2 border rounded bg-white dark:bg-gray-800 text-black dark:text-white"
        rows={3}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="w-full p-2 border rounded bg-white dark:bg-gray-800 text-black dark:text-white"
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button
        type="submit"
        className="w-full sm:w-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
      >
        {editTask ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  )
}

export default TaskForm
