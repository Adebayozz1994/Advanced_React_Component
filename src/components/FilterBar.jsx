import React from 'react'

const FilterBar = ({ state, dispatch }) => {
  return (
    <div className="flex justify-between my-4">
      <select
        value={state.filter}
        onChange={(e) => dispatch({ type: 'SET_FILTER', payload: e.target.value })}
        className="border p-2"
      >
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
      </select>
      <select
        value={state.priorityFilter}
        onChange={(e) => dispatch({ type: 'SET_PRIORITY_FILTER', payload: e.target.value })}
        className="border p-2"
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
