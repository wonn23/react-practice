import { useState, useCallback } from 'react'
import styled from 'styled-components'

interface ITodoInsertProps {
  onInsert: (text: string) => void
}

const TodoInsert = ({ onInsert }: ITodoInsertProps) => {
  const [value, setValue] = useState('')

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [])

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      // onSubmit event는 새로고침을 발생시키기 때문에 이를 막기위해 이 함수를 호출한다.
      e.preventDefault()
      onInsert(value)
      setValue('')
    },
    [onInsert, value],
  )

  return (
    <Form onSubmit={onSubmit}>
      <input
        placeholder="할일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">+</button>
    </Form>
  )
}

export default TodoInsert

const Form = styled.form`
  display: flex;
  background: #495057;

  input {
    background: none;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: white;
    &::placeholder {
      color: #dee2e6;
    }
    flex: 1;
  }

  button {
    background: none;
    outline: none;
    border: none;
    background: #868e96;
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.1s background ease-in;
    &:hover {
      background: #adb5bd;
    }
  }
`
