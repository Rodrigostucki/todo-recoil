import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../atoms/todoListAtom';

export default function TodoForm() {
  const [input, setInput] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addTodo = () => {
    if (!input.trim()) return;
    setTodoList((old) => [
      ...old,
      { id: Date.now(), text: input, completed: false },
    ]);
    setInput('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nova tarefa..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Adicionar</button>
    </div>
  );
}
