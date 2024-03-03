import { ReactNode, createContext, useEffect, useState } from "react"
import { ITarefasContext } from "../types/types.ts";

export const TarefasContext = createContext<ITarefasContext | null>(null);
TarefasContext.displayName = "Tarefas"

export const TarefasProvider = ({children}: {children: ReactNode}) => {
    const [tarefas, setTarefas] = useState([])
    
    useEffect(() => {
        setTarefas([{ titulo: 'Tarefa', completo: false }])
    }, [])

    return (
        <TarefasContext.Provider value={{ tarefas, setTarefas }}>
            {children}
        </TarefasContext.Provider>
    )
}