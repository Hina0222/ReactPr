import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useState, useRef, useCallback } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '첫번째 내용',
      checked: true,
    },
    {
      id: 2,
      text: '두번째 내용',
      checked: true,
    },
    {
      id: 3,
      text: '세번째 내용',
      checked: false,
    },
  ]);
  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo=>todo.id !== id));
    },[todos],);

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo=>
          todo.id === id ?{...todo,checked:!todo.checked}:todo,
        ),
      );
    },[todos],);

  return <TodoTemplate>
    <TodoInsert onInsert={onInsert} />
    <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
  </TodoTemplate>;
}

export default App;
