import {useDispatch, useSelector} from 'react-redux';
import {colorChanged, statusChanged} from '../redux/filters/actions';

function formatNumberOfTodos(numOfTodos) {
  switch (numOfTodos) {
    case 0:
      return 'No task';
    case 1:
      return '1 task';
    default:
      return `${numOfTodos} tasks`;
  }
}

export default function Footer() {
  const dispatch = useDispatch();

  const numOfTodos = useSelector(
    (state) => state.todos.filter((todo) => !todo.complete).length,
  );

  const {status, colors} = useSelector((state) => state.filters);

  // console.log(status, colors);

  const handleStatusChange = (newStatus) => {
    // !We can validate status here.
    dispatch(statusChanged(newStatus));
  };

  const handleColorChange = (color) => {
    // !We can validate color here.
    if (colors.includes(color)) {
      dispatch(colorChanged(color, 'remove'));
    } else {
      dispatch(colorChanged(color, 'add'));
    }
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{formatNumberOfTodos(numOfTodos)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${status === 'all' && 'font-bold'}`}
          onClick={() => handleStatusChange('all')}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === 'incomplete' && 'font-bold'}`}
          onClick={() => handleStatusChange('incomplete')}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === 'complete' && 'font-bold'}`}
          onClick={() => handleStatusChange('complete')}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes('green') && 'bg-green-500'}`}
          onClick={() => handleColorChange('green')}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes('red') && 'bg-red-500'}`}
          onClick={() => handleColorChange('red')}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-blue-500 md:hover:bg-blue-500 rounded-full cursor-pointer ${colors.includes('yellow') && 'bg-blue-500'}`}
          onClick={() => handleColorChange('yellow')}
        ></li>
      </ul>
    </div>
  );
}
