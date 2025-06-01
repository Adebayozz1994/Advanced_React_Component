import React from 'react'

const FilterBar = ({ state, dispatch }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 my-4">
      <select
        value={state.filter}
        onChange={(e) => dispatch({ type: 'SET_FILTER', payload: e.target.value })}
        className="border p-2 rounded bg-white dark:bg-gray-800 text-black dark:text-white"
      >
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
      </select>
      <select
        value={state.priorityFilter}
        onChange={(e) => dispatch({ type: 'SET_PRIORITY_FILTER', payload: e.target.value })}
        className="border p-2 rounded bg-white dark:bg-gray-800 text-black dark:text-white"
      >
        <option value="All">All Priorities</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </div>
  )
}

export default FilterBar
