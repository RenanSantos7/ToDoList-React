import './Formulario.css'
import { useState } from 'react'
import mais from '../../assets/plus-solid.svg'

export default function Formulario({ criaNovaTarefa }) {
    const [textoNovaTarefa, setTextoNovaTarefa] = useState('')

    function adicionarTarefa(evento) {
        evento.preventDefault()
        criaNovaTarefa(objeto)
    }

    return (
        <section className='add-nova-tarefa'>
            <form className='form-nova-tarefa' onSubmit={evt => { adicionarTarefa(evt) }}>
                <input
                    id="txtnovatarefa"
                    type="text"
                    placeholder="Adicionar nova Tarefa"
                    value={textoNovaTarefa}
                    onChange={evt => { setTextoNovaTarefa(evt.target.value) }}
                />

                <button
                    type="submit"
                    id="btaddtarefa"
                    className='circulo quadrado'
                >
                    <img src={mais} />
                </button>
            </form>
        </section>
    )
}
