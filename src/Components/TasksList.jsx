import useTasks from '../Hooks/Tasks.js'
import NoTasks from './NoTasks'
import TasksGroup from './TaskGroup.jsx'

export default function TasksList() {
  const { tasks } = useTasks()

  return (
    <div class="taskList">{tasks.length ? <TasksGroup /> : <NoTasks />}</div>
  )
}
