import { GET_TODOS } from '../actions/types';

const initialState = {
  todoList: [],
  todo: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todoList: action.payload,
      };
    default:
      return state;
  }
}
