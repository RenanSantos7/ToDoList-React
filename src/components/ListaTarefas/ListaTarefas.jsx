import Tarefa from '../Tarefa/Tarefa'
import './ListaTarefas.css'

export default function ListaTarefas({ tarefas }) {
    

    return (
        <section className='lista-tarefas'>
            {tarefas.map(tarefa => { <Tarefa tarefa={tarefa} /> } )}
        </section>
    )
}
