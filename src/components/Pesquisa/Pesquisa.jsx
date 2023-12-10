import './Pesquisa.css'

export default function Pesquisa({ pesquisa, setPesquisa }) {
    return (
        <section className='pesquisa'>
            <input
                type='text'
                placeholder='Digite aqui para pesquisar'
                value={pesquisa}
                onChange={evt => setPesquisa(evt.target.value)}
            /> 
        </section>
    )
}
