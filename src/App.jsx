import { useState } from 'react'
import Formulario from './components/Formulário/Formulario'
import ListaTarefas from './components/ListaTarefas/ListaTarefas'
import './App.css'

function App() {

  const [tarefas, setTarefas] = useState(
    JSON.parse(localStorage.getItem("tarefas")) || [])

  return (
    <main className="corpo">
      <h1>Lista de tarefas</h1>
      <Formulario
        tarefas={tarefas}
        setTarefas={setTarefas}
      />

      <ListaTarefas tarefas={tarefas} />
    </main>
  )
}

export default App
