import './Tarefa.css'
import x from "../../assets/xmark-solid.svg"

export default function Tarefa({ tarefa, excluirTarefa }) {
    return (
        <article className='tarefa'>
            <label>
                <input type='checkbox' className='check' />
                <div className='tarefa-container'>
                    <p className='nome-tarefa'>{tarefa.nome}</p>
                    <p className='categoria'>{tarefa.categoria}</p>
                </div>
            </label>
            <div className='botoes'>
                <button
                    className='flex-center circulo quadrado trans-ease'
                    onClick={() => {excluirTarefa(tarefa.id)}}
                >
                    <img alt='x' src={x} />
                </button>
            </div>
        </article>
    )
}
