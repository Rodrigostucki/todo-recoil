import { selector } from 'recoil';
import { todoListState } from '../atoms/todoListAtom';
import { filterState } from '../atoms/filterAtom';

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(filterState);
    const list = get(todoListState);

    switch (filter) {
      case 'completed':
        return list.filter((item) => item.completed);
      case 'pending':
        return list.filter((item) => !item.completed);
      default:
        return list;
    }
  },
});
