import { createContext } from 'preact'
import { useState } from 'preact/hooks'

// lazy state
function getTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks'))
  if (tasks) return tasks
  else {
    localStorage.setItem('tasks', '[]')
    return []
  }
}

// Context
export const TasksContext = createContext([])

// Context Provider
export default function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(getTasks())

  return (
    <TasksContext.Provider value={[tasks, setTasks]}>
      {children}
    </TasksContext.Provider>
  )
}
