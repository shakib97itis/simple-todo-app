import notesImage from '../assets/images/notes.png';
import doubleClickImage from '../assets/images/double-tick.png';
import {useDispatch} from 'react-redux';
import {added} from '../redux/todos/actions';

export default function Header() {
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    if (text === '') return;
    console.log(typeof text);
    dispatch(added(text));
    e.target[0].value = '';
  };

  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={handleAddTodo}
      >
        <img src={notesImage} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className="appearance-none w-8 h-8 bg-[url('/plus.png')] bg-no-repeat bg-contain cursor-pointer"
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer">
          <img className="w-4 h-4" src={doubleClickImage} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer">Clear completed</li>
      </ul>
    </div>
  );
}
