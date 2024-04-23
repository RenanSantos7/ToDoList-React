import { ReactNode, createContext, useEffect, useState } from "react"
import { ITarefa } from "../types/types.ts";

export const TarefasContext = createContext(null);
TarefasContext.displayName = "Tarefas"

export const TarefasProvider = ({children}: {children: ReactNode}) => {
    const [tarefas, setTarefas] = useState<ITarefa[]>(carregarDoLocalStorage() || [{ id: 0, titulo: 'Tarefa', completo: false }])

    function salvarNoLocalStorage(valor:any) {
		const valorJson = JSON.stringify(valor)
		localStorage.setItem('tarefas', valorJson)
    }

    function carregarDoLocalStorage() {
		const valorJson = localStorage.getItem('tarefas')
		return JSON.parse(valorJson)
    }

    useEffect(() => {
        salvarNoLocalStorage(tarefas)
    }, [tarefas])

    return (
        <TarefasContext.Provider value={{ tarefas, setTarefas }}>
            {children}
        </TarefasContext.Provider>
    )
}