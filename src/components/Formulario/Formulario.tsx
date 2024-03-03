import styles from './Formulario.module.css'
import { FormEvent, useContext, useState } from 'react'
import { Tarefa } from '../../types/types.ts'
import Botao from '../Botao/Botao.tsx'
import CampoTexto from '../CampoTexto/CampoTexto.tsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { TarefasContext } from '../../contexts/TarefasContext.tsx'

export default function Formulario() {
	const { tarefas, setTarefas } = useContext(TarefasContext)

	const [novaTarefa, setNovaTarefa] = useState<Tarefa>({ id: tarefas.length, titulo: '', completo: false })

	function cadastrarNovaTarefa(evt: FormEvent) {
		evt.preventDefault()
		if (novaTarefa.titulo.length > 0) {
			setTarefas((prev: Tarefa[]) => [...prev, novaTarefa])
			setNovaTarefa({ id: tarefas.length, titulo: '', completo: false })
		}
	}

	return (
		<form className={styles.container}>
			<CampoTexto valor={novaTarefa} setValor={setNovaTarefa} />
			<Botao tipo='submit' aoClicar={cadastrarNovaTarefa}>
				<FontAwesomeIcon icon={faPlus} />
			</Botao>
		</form>
	)
}
