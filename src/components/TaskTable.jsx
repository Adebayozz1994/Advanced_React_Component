import React from 'react'

const TaskTable = ({ state, dispatch, onEdit }) => {
  const filteredTasks = state.tasks
    .filter((task) => {
      if (state.filter === 'All') return true
      if (state.filter === 'Completed') return task.completed
      if (state.filter === 'Pending') return !task.completed
      return true
    })
    .filter((task) => {
      if (state.priorityFilter === 'All') return true
      return task.priority === state.priorityFilter
    })

  return (
    <div className="overflow-x-auto">
      <table className="w-full border rounded-lg mt-4 text-sm sm:text-base">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-800 text-left">
            <th className="p-2">Title</th>
            <th className="p-2">Description</th>
            <th className="p-2">Priority</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task) => (
            <tr key={task.id} className="border-t dark:border-gray-700">
              <td className="p-2">{task.title}</td>
              <td className="p-2">{task.description}</td>
              <td className="p-2">{task.priority}</td>
              <td className="p-2">{task.completed ? 'Completed' : 'Pending'}</td>
              <td className="p-2 space-x-2">
                <button
                  onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
                  className="text-green-600 hover:underline"
                >
                  {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button
                  onClick={() => onEdit(task)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TaskTable
