import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'

import styled from 'styled-components'

interface ITodo {
  id: number
  text: string
  checked: boolean
}

interface ITodoListItemProps {
  todo: ITodo
  onRemove: (id: number) => void
  onToggle: (id: number) => void
}

const TodoListItem = ({ todo, onRemove, onToggle }: ITodoListItemProps) => {
  const { id, text, checked } = todo
  return (
    <ListItem>
      <CheckBox onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <Text checked={checked}>{text}</Text>
      </CheckBox>
      <Remove onClick={() => onRemove(id)}>삭제</Remove>
    </ListItem>
  )
}

export default TodoListItem

const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e9ecef;
  &:nth-child(even) {
    background: #f8f9fa;
  }
`

const CheckBox = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  svg {
    font-size: 1.5rem;
  }
  &.checked {
    svg {
      color: #22b8cf;
    }
  }
  width: 100%;
  justify-content: space-between;
`

const Text = styled.span<{ checked: boolean }>`
  margin-left: 0.5rem;
  flex: 1;
  color: ${({ checked }) => (checked ? '#adb5bd' : '#495057')};
  text-decoration: ${({ checked }) => (checked ? 'line-through' : 'none')};
`

const Remove = styled.button`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #ff6b6b;
  cursor: pointer;
  background: none;
  &:hover {
    color: #ff8787;
  }
  border: none;
`
