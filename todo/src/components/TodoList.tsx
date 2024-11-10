import styled from 'styled-components'
import TodoListItem from './TodoListItem'

interface ITodo {
  id: number
  text: string
  checked: boolean
}

interface ITodoListProps {
  todos: ITodo[]
  onRemove: (id: number) => void
  onToggle: (id: number) => void
}

const TodoList = ({ todos, onRemove, onToggle }: ITodoListProps) => {
  return (
    <List>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
          todo={todo}
        />
      ))}
    </List>
  )
}

export default TodoList

const List = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`
