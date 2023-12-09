import './InputTexo.css'

export default function InputTexo({ valor, aoAlterar }) {
    return (
        <>
            <input
                id="txtnovatarefa"
                type="text"
                placeholder="Adicionar nova Tarefa"
                value={valor}
                onChange={evt => {aoAlterar(evt.target.value)}}
            />
        </>
    )
}
