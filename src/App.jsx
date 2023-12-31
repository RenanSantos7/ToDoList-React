import { useState } from "react"
import Formulario from "./components/Formulário/Formulario"
import Tarefa from "./components/Tarefa/Tarefa"
import "./App.css"
import Pesquisa from "./components/Pesquisa/Pesquisa"

function App() {
  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      nome: "Limpar quarto",
      categoria: "Casa",
      completa: false
    },
    {
      id: 2,
      nome: "Estudar React",
      categoria: "Estudos",
      completa: false
    },
    {
      id: 3,
      nome: "Verificar processos",
      categoria: "Trabalho",
      completa: false
    }
  ])

  const [pesquisa, setPesquisa] = useState('')
  const [categoria, setCategoria] = useState(null)
  const [textoNovaTarefa, setTextoNovaTarefa] = useState('')

  function criaNovaTarefa() {
    if (textoNovaTarefa != "") {
      const novaTarefa = {
        id: Math.floor(Math.random * 1000),
        nome: textoNovaTarefa,
        categoria: categoria,
        completa: false
      }

      setTarefas([...tarefas, novaTarefa])

      localStorage.setItem("tarefas", JSON.stringify(tarefas))
    }

    setTextoNovaTarefa("")
  }

  function excluirTarefa(id) {
    const lista = tarefas.filter(item => { item.id !== id })
    setTarefas(lista)
  }

  return (
    <main className='corpo'>
      <div className="cima">
        <h1>Lista de tarefas</h1>
        <Pesquisa
          pesquisa={pesquisa}
          setPesquisa={setPesquisa}
        />

        <section className='lista-tarefas'>
          {tarefas
            .filter(item => item.nome.toLowerCase().includes(pesquisa.toLowerCase()))
            .map(tarefa => {
              return (
                <Tarefa
                  tarefa={tarefa}
                  excluirTarefa={excluirTarefa}
                />
              )
              })
          }
        </section>
      </div>
      
      <div className="baixo">
        <Formulario
          criaNovaTarefa={criaNovaTarefa}
          textoNovaTarefa={textoNovaTarefa}
          setTextoNovaTarefa={setTextoNovaTarefa}
          setCategoria={setCategoria}
        />
      </div>
    </main>
  )
}

export default App
