import {useSelector} from 'react-redux';
import TodoItem from './TodoItem';

export default function TodoList() {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-75 overflow-y-auto">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
