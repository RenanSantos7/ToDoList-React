import styles from './CampoTexto.module.css'
import { ITarefa } from '../../types/types.ts'
import { ChangeEvent, useContext } from 'react'
import { TarefasContext } from '../../contexts/TarefasContext.tsx'

interface CampoTextoProps {
	valor: string
	setValor: (valor: string) => void
}

export default function CampoTexto({ valor, setValor }: CampoTextoProps) {

	function aoDigitar(evt: ChangeEvent<HTMLInputElement>) {
		const texto = evt.target.value
		setValor(texto)
	}

	return (
		<label className={styles.campo}>
			<input
				className={styles.entrada}
				value={valor}
				onChange={aoDigitar}
				placeholder='Nome da nova tarefa'
			/>
		</label>
	)
}
