import styles from './CampoTexto.module.css'
import { Tarefa } from '../../types/types.ts'
import { useContext } from 'react'
import { TarefasContext } from '../../contexts/TarefasContext.tsx'

interface CampoTextoProps {
	valor: Tarefa
	setValor: (tarefa: Tarefa) => void
}

export default function CampoTexto({ valor, setValor }: CampoTextoProps) {
	const { tarefas } = useContext(TarefasContext)

	function aoDigitar(evt: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
		let entrada = (evt.target as HTMLInputElement).value
		let novaTarefa = { id: tarefas.length, titulo: entrada, completo: false }
		setValor(novaTarefa)
	}

	return (
		<label className={styles.campo}>
			<input className={styles.entrada} value={valor.titulo} onChange={aoDigitar} placeholder='Nome da nova tarefa' />
		</label>
	)
}
