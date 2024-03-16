import styles from './Lista.module.css'
import { useContext } from "react";
import { ITarefa } from "../../types/types.ts"
import ItemLista from "../ItemLista/ItemLista.tsx"
import { TarefasContext } from "../../contexts/TarefasContext.tsx";

export default function Lista() {
    const { tarefas } = useContext(TarefasContext)

    return (
        <div className={styles.box}>
            {tarefas.map((tarefa: ITarefa, i: number) => (
                <ItemLista
                    key={i}
                    item={tarefa}
                />
            ))}
        </div>
    );
}
