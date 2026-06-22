import {useSelector} from 'react-redux';
import TodoItem from './TodoItem';

function filterTodosByStatus(todos, status) {
  switch (status) {
    case 'complete':
      return todos.filter((todo) => todo.complete);
    case 'incomplete':
      return todos.filter((todo) => !todo.complete);
    default:
      return todos;
  }
}

function filterTodosByColors(todos, colors) {
  if (colors.length > 0) {
    return todos.filter((todo) => colors.includes(todo?.color));
  }
  return todos;
}

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const {status, colors} = useSelector((state) => state.filters);

  let filteredTodos = filterTodosByStatus(todos, status);
  filteredTodos = filterTodosByColors(filteredTodos, colors);

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-75 overflow-y-auto">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
