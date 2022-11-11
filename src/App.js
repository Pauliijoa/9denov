
import { useState } from 'react';
import './App.css';
import Todo from './componentes/Todo'

function App() {
  const defaultState = [
    { label: "comprar mantequilla" },
    { label: "comprar pan" },
    { label: "pagar la luz" }
  ]
  const [items, setItems] = useState(defaultState)
  const [newitem, setNewItem] = useState('')

  const deleteFn = (label) => {
    setItems(items.filter(item => item.label !== label))
  }
  const deleteAll = () => {
    setItems([])

  }


  const list = items.map(item => {
    return (
      <Todo
        onClickFn={() => deleteFn(item.label)}>
        {item.label}
      </Todo>
    )
  })

  const onClickFn = () => {
    console.log(newitem)
    setItems([...items, { label: newitem }])
  }
  const onChangerfn = (event) => {
    setNewItem(event.target.value)
  }
  return (
    <div className="app">
      <h1>mi lista por cosas que hacer</h1>
      <span> cantidad de items:{items.length}</span>

      <input
        type="text"
        value={newitem}
        onChange={onChangerfn}
      />
      <button onClick={onClickFn}>agregar</button>
      <button onClick={deleteAll}> eliminar </button>
      {list}

    </div>


  )
}


export default App;