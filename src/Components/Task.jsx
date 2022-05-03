import { memo } from 'preact/compat'

export default memo(function Task({ task, deleteTask, toggleDone }) {
  const { name, done, id } = task

  console.log('rendered', name)

  return (
    <li>
      <label>
        {name}
        <input type="checkbox" checked={done} onInput={() => toggleDone(id)} />
      </label>

      <button onClick={() => deleteTask(id)}>Eliminar</button>
    </li>
  )
})
