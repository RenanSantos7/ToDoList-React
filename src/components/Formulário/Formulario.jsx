import './Formulario.css'
import { useState } from 'react'
import InputTexo from '../InputTexto/InputTexto'
import mais from '../../assets/plus-solid.svg'

export default function Formulario({ tarefas, setTarefas }) {
    const [textoNovaTarefa, setTextoNovaTarefa] = useState('')

    function adicionarTarefa(evento) {
        evento.preventDefault()
        criaNovaTarefa()
    }

    function criaNovaTarefa() {
        if (textoNovaTarefa != '') {
            const novaTarefa = {
                "checked": false,
                "texto": textoNovaTarefa
            }
    
            setTarefas([...tarefas, novaTarefa])
    
            localStorage.setItem("tarefas", JSON.stringify(tarefas))
        } 
    
        setTextoNovaTarefa('')
    }

    return (
        <section className='add-nova-tarefa'>
            <form className='form-nova-tarefa'>
                <InputTexo
                    valor={textoNovaTarefa}
                    aoAlterar={valor => setTextoNovaTarefa(valor)}
                />
                
                <button
                    type="button"
                    id="btaddtarefa"
                    className='circulo'
                    onClick={evento => { adicionarTarefa(evento) }}
                >
                    <img src={mais} />
                </button>
            </form>
        </section>
    )
}
