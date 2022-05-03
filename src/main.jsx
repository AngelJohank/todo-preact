import { render } from 'preact'
import { App } from './app'
import TasksProvider from './Context/TasksContext'

render(
  <TasksProvider>
    <App />
  </TasksProvider>,
  document.getElementById('app')
)
