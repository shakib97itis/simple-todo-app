import {
  ADDED,
  TOGGLED,
  COLOR_SELECTED,
  DELETED,
  ALL_COMPLETED,
  CLEAR_COMPLETED,
} from './actionTypes';

export function added(text) {
  return {
    type: ADDED,
    payload: {
      text,
    },
  };
}

export function toggled(todoId) {
  return {
    type: TOGGLED,
    payload: {
      todoId,
    },
  };
}

export function colorSelected(todoId, color) {
  return {
    type: COLOR_SELECTED,
    payload: {
      todoId,
      color,
    },
  };
}

export function deleted(todoId) {
  return {
    type: DELETED,
    payload: {
      todoId,
    },
  };
}

export function allCompleted() {
  return {
    type: ALL_COMPLETED,
  };
}

export function clearCompleted() {
  return {
    type: CLEAR_COMPLETED,
  };
}
