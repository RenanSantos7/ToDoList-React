export interface Tarefa {
	titulo: string
	completo: boolean
	id: number
}

export interface ITarefasContext {
	tarefas: Tarefa[],
	setTarefas: any
}