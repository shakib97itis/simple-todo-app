import {COLOR_CHANGED, STATUS_CHANGED} from './actionTypes';

export function statusChanged(status) {
  return {
    type: STATUS_CHANGED,
    payload: {
      status,
    },
  };
}

export function colorChanged(color, changeType) {
  return {
    type: COLOR_CHANGED,
    payload: {
      color,
      changeType,
    },
  };
}
