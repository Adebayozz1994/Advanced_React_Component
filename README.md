# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


📝 Task Management Dashboard
A simple yet powerful task management app built with React. You can add, edit, delete, and filter tasks based on their status (Completed or Pending) and priority (High, Medium, Low). The app also stores your tasks in localStorage, so your data is saved between sessions.

🚀 Features
 Add new tasks with title, description, and priority

✏️ Edit existing tasks

🗑️ Delete tasks

📌 Mark tasks as completed or pending

🔍 Filter tasks by status (All, Completed, Pending)

🔎 Filter tasks by priority (All, High, Medium, Low)

💾 Tasks are stored in your browser using localStorage

🛠️ Built With
React

useReducer for global state management

Tailwind CSS for UI styling

localStorage for persistent task data

📁 Project Structure
bash
Copy
Edit
src/
├── components/
│   ├── FilterBar.jsx        # UI component for filtering tasks
|   ├── Home.jsx             # UI component HomePage tasks
│   ├── TaskForm.jsx         # Form to add/edit tasks
│   └── TaskTable.jsx        # Table view of all tasks
├── context/
│   └── TaskReducer.js      # Reducer and initial state for task management
└── pages/
    └── Home.js             # Main dashboard view
📦 How It Works
🧠 State Management
All tasks and filters are managed through a reducer function using the useReducer hook:

js
Copy
Edit
const [state, dispatch] = useReducer(reducer, initialState)
Actions Supported
ADD_TASK - Adds a new task

EDIT_TASK - Edits an existing task

DELETE_TASK - Removes a task

TOGGLE_TASK - Marks task as completed or pending

SET_FILTER - Filter by task status

SET_PRIORITY_FILTER - Filter by task priority

🗃️ Persistent Storage
I save the entire state to localStorage anytime it changes:

js
Copy
Edit
useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(state))
}, [state])

📦 Getting Started
Clone the repo

bash
Copy
Edit
git clone https://github.com/Adebayozz1994/Advanced-React-Component
cd task-dashboard
Install dependencies

bash
Copy
Edit
npm install
Start the app

bash
Copy
Edit
npm start
Then go to http://localhost:5173 in your browser.

🧑‍💻 Author
Made with ❤️ by Ogunlade Adebayo Peter
Feel free to reach out or contribute!

📄 License
This project is licensed under the MIT License.
