import {loaded} from '../actions';

export default async function fetchTodos(dispatch) {
  try {
    const res = await fetch('http://localhost:9000/todos');
    const data = await res.json();
    dispatch(loaded(data));
  } catch (error) {
    console.log(error);
  }
}
