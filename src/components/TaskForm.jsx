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

    if (editTask) {
      dispatch({
        type: 'EDIT_TASK',
        payload: {
          ...editTask,
          title,
          description,
          priority,
        },
      })
      setEditTask(null)
    } else {
      dispatch({
        type: 'ADD_TASK',
        payload: {
          id: Date.now(),
          title,
          description,
          priority,
          completed: false,
        },
      })
    }

    setTitle('')
    setDescription('')
    setPriority('Medium')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        className="w-full p-2 border rounded"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="w-full p-2 border rounded"
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        {editTask ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  )
}

export default TaskForm
