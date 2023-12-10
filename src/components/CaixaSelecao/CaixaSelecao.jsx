//import './CaixaSelecao.css'

import Select from "react-select"
// https://www.npmjs.com/package/react-select

export default function CaixaSelecao({ setCategoria }) {
    const opcoes = [
        { value: 'Trabalho', label: 'Trabalho' },
        { value: 'Estudos', label: 'Estudos' },
        { value: 'Casa', label: 'Casa' },
        { value: 'Pessoal', label: 'Pessoal' }
    ]

    return (
        <>
            <Select
                className="caixa-selecao"
                classNamePrefix="caixa-selecao__opt"
                options={opcoes}
                onChange={setCategoria}
                placeholder='Escolha uma categoria'
                isSearchable
            />
        </>
    )
}
