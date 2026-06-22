import {COLOR_CHANGED, STATUS_CHANGED} from './actionTypes';

const initialState = {
  status: 'all',
  colors: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case STATUS_CHANGED:
      return {...state, status: action.payload.status};
    case COLOR_CHANGED:
      switch (action.payload.changeType) {
        case 'add':
          return {...state, colors: [...state.colors, action.payload.color]};
        case 'remove':
          return {
            ...state,
            colors: state.colors.filter((c) => c !== action.payload.color),
          };
        default:
          return state;
      }
    default:
      return state;
  }
}
