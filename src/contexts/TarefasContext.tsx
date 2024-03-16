import { ReactNode, createContext, useEffect, useState } from "react"
import { ITarefa } from "../types/types.ts";

export const TarefasContext = createContext(null);
TarefasContext.displayName = "Tarefas"

export const TarefasProvider = ({children}: {children: ReactNode}) => {
    const [tarefas, setTarefas] = useState<ITarefa[]>([{ id: 0, titulo: 'Tarefa', completo: false }])

    return (
        <TarefasContext.Provider value={{ tarefas, setTarefas }}>
            {children}
        </TarefasContext.Provider>
    )
}