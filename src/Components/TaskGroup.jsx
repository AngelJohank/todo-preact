import useTasks from '../Hooks/Tasks.js'
import Task from './Task'

export default function TasksGroup() {
  const { tasks, toggleDone, deleteTask } = useTasks()

  return (
    <ul>
      {tasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          deleteTask={deleteTask}
          toggleDone={toggleDone}
        />
      ))}
    </ul>
  )
}
