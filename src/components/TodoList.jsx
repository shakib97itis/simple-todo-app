import {useDispatch, useSelector} from 'react-redux';
import TodoItem from './TodoItem';
import {useEffect} from 'react';
import fetchTodos from '../redux/todos/thunk/fetchTodos';

export default function TodoList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos);
  }, [dispatch]);

  const todos = useSelector((state) => state.todos);
  const {status, colors} = useSelector((state) => state.filters);

  const filteredTodos = todos
    .filter((todo) => {
      switch (status) {
        case 'complete':
          return todo.complete;
        case 'incomplete':
          return !todo.complete;
        default:
          return true;
      }
    })
    .filter((todo) => {
      if (colors.length > 0) {
        return colors.includes(todo?.color);
      }
      return true;
    });

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-75 overflow-y-auto">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
