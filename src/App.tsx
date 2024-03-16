import Formulario from './components/Formulario/Formulario.tsx'
import Lista from './components/Lista/Lista.tsx'

export default function App() {
	const styles = {
		box: {
			backgroundColor: 'var(--bg)',
			width: '600px',
			marginInline: 'auto',
			height: '90dvh',
			borderRadius: '1rem 1rem 0 0',
			padding: '1.5rem',
		},

		titulo: {
			fontWeight: '500',
			fontSize: '2rem',
		},
	}

	return (
		<main style={styles.box}>
			<h1 style={styles.titulo}>Lista de tarefas</h1>
			<Formulario />
			<Lista />
		</main>
	)
}
