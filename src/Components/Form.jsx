import useTasks from '../Hooks/Tasks'
import { useState } from 'preact/hooks'

export default function Form() {
  const [task, setTask] = useState('')
  const { addTask } = useTasks()

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (task === '') return
    addTask(task)
    setTask('')
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="taskInput">New Task </label>
      <input
        id="taskInput"
        type="text"
        placeholder="Make dinner :D"
        value={task}
        onInput={handleChange}
      />
      <button>Subir</button>
    </form>
  )
}
