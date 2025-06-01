export const initialState = {
  tasks: [],
  filter: 'All',
  priorityFilter: 'All'
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] }
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        )
      }
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      }
  case 'EDIT_TASK':
  return {
    ...state,
    tasks: state.tasks.map(task =>
      task.id === action.payload.id
        ? {
            ...task,
            title: action.payload.title,
            description: action.payload.description,
            priority: action.payload.priority
          }
        : task
    )
  }

    case 'SET_FILTER':
      return { ...state, filter: action.payload }
    case 'SET_PRIORITY_FILTER':
      return { ...state, priorityFilter: action.payload }
    default:
      return state
  }
}
