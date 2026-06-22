import {
  ADDED,
  TOGGLED,
  COLOR_SELECTED,
  DELETED,
  ALL_COMPLETED,
  CLEAR_COMPLETED,
  LOADED,
} from './actionTypes';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADED:
      return [...state, ...action.payload.todos];
    case ADDED:
      return [
        ...state,
        {text: action.payload.text, id: crypto.randomUUID(), complete: false},
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
