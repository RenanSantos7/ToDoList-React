import { ChangeEvent, FormEvent, ReactNode } from "react"
import styles from './Botao.module.css'

interface BotaoProps {
    children: ReactNode
    tipo?: 'button' | 'submit' | 'reset'
    aoClicar: (evt:FormEvent | ChangeEvent) => void
}

export default function Botao({ children, tipo = 'button', aoClicar }: BotaoProps) {
	return (
		<>
            <button
                type={tipo}
                onClick={aoClicar}
                className={styles.botao}
            >{children}</button>
		</>
	)
}
