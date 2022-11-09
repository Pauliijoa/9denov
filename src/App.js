
import { useState } from 'react';
import './App.css';
import Todo from './componentes/Todo'

function App() {
  const defaultState = [
    { label: "comprar mantequilla" },
    { label: "comprar pan" },
    { label: "pagar la luz" }
  ]
  const [items, serItems] = useState(defaultState)
  const list = items.map(item => {
    return <Todo>{item.label}</Todo>
  })
  return (
    <div className="app">
      <h1>mi lista por cosas que hacer</h1>
      <input type="text" />
      <button> agregar</button>
      {list}
    </div>

  )
}


export default App;
