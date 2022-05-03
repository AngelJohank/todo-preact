import useTasks from './Hooks/Tasks.js'

import TasksList from './Components/TasksList'
import Form from './Components/Form'

export function App() {
  const { tasks, removeTasks } = useTasks()

  return (
    <div>
      <Form />
      <TasksList />
      {!tasks.length ? (
        ''
      ) : (
        <button onClick={() => removeTasks()}>Remover todos</button>
      )}
    </div>
  )
}
