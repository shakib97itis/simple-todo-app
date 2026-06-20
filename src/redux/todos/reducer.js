import {
  ADDED,
  TOGGLED,
  COLOR_SELECTED,
  DELETED,
  ALL_COMPLETED,
  CLEAR_COMPLETED,
} from './actionTypes';

const initialState = [
  {
    id: crypto.randomUUID(),
    text: 'Learn React',
    complete: false,
  },
  {
    id: crypto.randomUUID(),
    text: 'Learn React',
    complete: true,
    color: 'red',
  },
];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {...action.payload.text, id: crypto.randomUUID(), complete: false},
      ];
    case TOGGLED:
      return state.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return {...todo, complete: !todo.complete};
        } else {
          return todo;
        }
      });
    case COLOR_SELECTED:
      return state.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return {...todo, color: action.payload.color};
        } else {
          return todo;
        }
      });
    case DELETED:
      return state.filter((todo) => todo.id !== action.payload.todoId);
    case ALL_COMPLETED:
      return state.map((todo) => {
        return {...todo, complete: true};
      });
    case CLEAR_COMPLETED:
      return state.filter((todo) => todo.complete === false);
    default:
      return state;
  }
}
