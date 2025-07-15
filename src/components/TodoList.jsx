import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from '../selectors/filteredTodoListSelector';
import TodoItem from './TodoItem';

export default function TodoList() {
  const filteredList = useRecoilValue(filteredTodoListState);

  return (
    <ul>
      {filteredList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
