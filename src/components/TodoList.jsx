import TodoItem from './TodoItem';

export default function TodoList() {
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-75 overflow-y-auto">
      <TodoItem />
    </div>
  );
}
