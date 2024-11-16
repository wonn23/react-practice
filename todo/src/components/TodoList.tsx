import styled from 'styled-components'
import TodoListItem from './TodoListItem'
import { ITodo, ITodoActions } from '../types/todo.types'

interface ITodoListProps extends ITodoActions {
  todos: ITodo[]
}

const TodoList = ({ todos, ...restProps }: ITodoListProps) => {
  return (
    <StyledFlex>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} {...restProps} />
      ))}
    </StyledFlex>
  )
}

export default TodoList

const StyledFlex = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`
