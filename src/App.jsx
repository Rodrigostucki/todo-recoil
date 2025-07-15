import { RecoilRoot } from 'recoil';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilters from './components/TodoFilters';

export default function App() {
  return (
    <RecoilRoot>
      <h1>Gerenciador de Tarefas</h1>
      <TodoForm />
      <TodoFilters />
      <TodoList />
    </RecoilRoot>
  );
}
