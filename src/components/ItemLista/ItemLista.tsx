import styles from './ItemLista.module.css'
import { ITarefa } from '../../types/types.ts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState, useEffect, ChangeEvent, useRef } from 'react'
import { TarefasContext } from '../../contexts/TarefasContext.tsx'
import Tags from '../Tags/Tags.tsx'
import CheckBox from '../CheckBox/CheckBox.tsx'

interface ItemListaProps {
	item: ITarefa
}

export default function ItemLista({ item }: ItemListaProps) {
	const { tarefas, setTarefas } = useContext(TarefasContext)
	const [editavel, setEditavel] = useState(false)
	const [itemTexto, setItemTexto] = useState('')
	const textoRef = useRef<HTMLInputElement>()
	const itemCompleto = {
		opacity: '0.5',
		textDecoration: 'line-through',
		fontStyle: 'italic'
	}

	function aoChecar() {
		const tarefasMod = tarefas.map((tarefa: ITarefa) => {
			if (tarefa.id === item.id) {
				return {...tarefa, completo: !tarefa.completo}
			} else {
				return tarefa
			}
		})

		setTarefas(tarefasMod)
	}

	function editar() {
		if (!item.completo) setEditavel(true)
	}

	useEffect(() => {
		const texto: HTMLInputElement = textoRef.current
		
		function aoApertarEnter(event: KeyboardEvent) {
			if (event.key === 'Enter') {
				salvarEdicao(texto)
				setEditavel(false)
			}
		}
		
		editavel 
			? texto.addEventListener('keydown', aoApertarEnter)
			: texto?.removeEventListener('keydown', aoApertarEnter)
	}, [editavel])
	

	function salvarEdicao(elem: HTMLInputElement) {
		setItemTexto(elem.value)
		const tarefasMod = tarefas.map((tarefa: ITarefa) => {
			if (tarefa.id === item.id) {
				return tarefa.titulo = itemTexto
			} else {
				return tarefa
			}
		})

		setTarefas(tarefasMod)
	}

	function excluir() {
		setTarefas((prev: ITarefa[]) => prev.filter(prevItem => prevItem.id !== item.id))
	}

	return (
		<div className={styles.container}>
			<label className={styles.campo}>
				<CheckBox
					aoMudar={aoChecar}
				/>
				<span
					style={item.completo ? itemCompleto : {}}
				>
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

				<span className={styles.tags}>
					{item.tags && 
						item.tags.map(tag => (
							<Tags titulo={tag} /> 
						))
					}
				</span>
			</label>
			<div className={styles.controles}>
				{/* <FontAwesomeIcon icon={faPencil} onClick={editar} /> */}

				<FontAwesomeIcon icon={faTrash} onClick={excluir} />
			</div>
		</div>
	)
}
