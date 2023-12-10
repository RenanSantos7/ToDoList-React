import './Formulario.css'
import mais from '../../assets/plus-solid.svg'
import CaixaSelecao from '../CaixaSelecao/CaixaSelecao'

export default function Formulario({ criaNovaTarefa, textoNovaTarefa, setTextoNovaTarefa, setCategoria }) {
    
    function aoSubmeter(evento) {
        evento.preventDefault()
        criaNovaTarefa()
    }

    return (
        <section className='add-nova-tarefa'>
            <CaixaSelecao
                setCategoria={setCategoria}
            />

            <form className='form-nova-tarefa' onSubmit={evt => { aoSubmeter(evt) }}>
                <input
                    id="txtnovatarefa"
                    type="text"
                    placeholder="Adicionar nova Tarefa"
                    value={textoNovaTarefa}
                    onChange={evt => { setTextoNovaTarefa(evt.target.value) }}
                />

                <button
                    type="submit"
                    className='circulo quadrado btaddtarefa'
                >
                    <img src={mais} />
                </button>
            </form>
        </section>
    )
}
