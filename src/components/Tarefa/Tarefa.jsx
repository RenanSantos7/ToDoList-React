import './Tarefa.css'

export default function Tarefa({ tarefa }) {
    return (
        <article className='tarefa'>
            <label>
                <input type='checkbox' className='check' />
                <span className='nome-tarefa'>{tarefa}</span>
            </label>
        </article>
    )
}
