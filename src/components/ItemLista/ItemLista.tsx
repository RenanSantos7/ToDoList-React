import styles from './ItemLista.module.css'
import { Tarefa } from '../../types/types.ts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState, useEffect, ChangeEvent, useRef } from 'react'
import { TarefasContext } from '../../contexts/TarefasContext.tsx'

interface ItemListaProps {
	item: Tarefa
}

type estado = [getter: boolean, setter: (arg: boolean) => any]

export default function ItemLista({ item }: ItemListaProps) {
	const { tarefas, setTarefas } = useContext(TarefasContext)
	const [editavel, setEditavel]: estado = useState(false)
	const [itemTexto, setItemTexto] = useState('')
	const textoRef = useRef()

	function aoChecar(evt: React.ChangeEvent) {
		const tarefasMod = tarefas.map(tarefa => {
			tarefa.id === item.id ? (tarefa.completo = !tarefa.completo) : tarefa
		})

		setTarefas(tarefasMod)
	}

	function editar() {
		setEditavel(true)
		const texto: HTMLInputElement = textoRef.current
		texto.addEventListener('keydown', (event: KeyboardEvent) => {
			if (event.key === 'Enter') {
				salvarEdicao(texto)
			}
		})
	}

	function salvarEdicao(elem: HTMLInputElement) {
		setItemTexto(elem.value)
		const tarefasMod = tarefas.map(tarefa => {
			tarefa.id === item.id ? (tarefa.titulo = itemTexto) : tarefa
		})

		setTarefas(tarefasMod)
	}

	function excluir() {
		setTarefas((prev: Tarefa[]) => prev.filter(prevItem => prevItem.id !== item.id))
	}

	return (
		<div className={styles.container}>
			<label className={styles.campo}>
				<input type='checkbox' checked={item.completo} onChange={aoChecar} />
				<span>
					{editavel
						? <input
							value={itemTexto}
							onChange={(evt: ChangeEvent) => {
								setItemTexto((evt.target as HTMLInputElement).value)
							}}
							ref={textoRef}
							className={styles.entradaEditavel}
							autoFocus
							onBlur={() => setEditavel(false)}
						/>
						: item.titulo
					}
				</span>
			</label>
			<div className={styles.controles}>
				<FontAwesomeIcon icon={faPencil} onClick={editar} />

				<FontAwesomeIcon icon={faTrash} onClick={excluir} />
			</div>
		</div>
	)
}
