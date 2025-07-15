import { useRecoilState } from 'recoil';
import { todoListState } from '../atoms/todoListAtom';

export default function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const toggleComplete = () => {
    const updated = todoList.map((todo) =>
      todo.id === item.id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodoList(updated);
  };

  const removeItem = () => {
    const filtered = todoList.filter((todo) => todo.id !== item.id);
    setTodoList(filtered);
  };

  return (
    <li>
      <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
        {item.text}
      </span>
      <button onClick={toggleComplete}>✔</button>
      <button onClick={removeItem}>✖</button>
    </li>
  );
}
