export interface ITodo {
  id: number
  text: string
  checked: boolean
}

export interface ITodoActions {
  onRemove: (id: number) => void
  onToggle: (id: number) => void
}
