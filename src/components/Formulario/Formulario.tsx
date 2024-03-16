import styles from './Formulario.module.css'
import { FormEvent, useContext, useState, useEffect } from 'react'
import { ITarefa } from '../../types/types.ts'
import Botao from '../Botao/Botao.tsx'
import CampoTexto from '../CampoTexto/CampoTexto.tsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { TarefasContext } from '../../contexts/TarefasContext.tsx'

export default function Formulario() {
	const { tarefas, setTarefas } = useContext(TarefasContext)

	const [entrada, setEntrada] = useState('')

	function cadastrarNovaTarefa(evt: FormEvent) {
		evt.preventDefault()
		if (entrada) {
			const palavras = entrada.split(/\s+/)

			const titulo = palavras
				.filter((palavra: string) => !palavra.startsWith('#'))
				.join(' ')
			
			const tags = palavras
				.filter((palavra: string) => palavra.startsWith('#'))
				.map(tag => tag.trim())

			const novaTarefa = {
				id: tarefas.length,
				titulo: titulo,
				completo: false,
				tags: tags
			}

			console.log(novaTarefa)

			setTarefas((prev: ITarefa[]) => [...prev, novaTarefa])
			setEntrada('')
		}
	}

	return (
		<form className={styles.container}>
			<CampoTexto
				valor={entrada}
				setValor={setEntrada}
			/>
			<Botao tipo='submit' aoClicar={cadastrarNovaTarefa}>
				<FontAwesomeIcon icon={faPlus} />
			</Botao>
		</form>
	)
}
