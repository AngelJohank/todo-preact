import { TasksContext } from '../Context/TasksContext'
import { useContext, useEffect, useCallback } from 'preact/hooks'

export default function useTasks() {
  const [tasks, setTasks] = useContext(TasksContext)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  // Create a new Task
  const addTask = (name) => {
    const newTask = { name, done: false, id: Date.now() }
    setTasks([...tasks, newTask])
  }

  // Delete an especific Task
  const deleteTask = useCallback((id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }, [])

  // Toggle Tasks.done
  const toggleDone = useCallback((id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id !== id) return task
        else return { ...task, done: !task.done }
      })
    )
  }, [])

  // Remove all Tasks
  const removeTasks = () => {
    setTasks([])
  }

  return {
    tasks,
    setTasks,
    addTask,
    deleteTask,
    toggleDone,
    removeTasks,
  }
}
