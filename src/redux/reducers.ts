import { combineReducers } from "redux";
import { Action, ActionTypes } from "./actions";

export interface Todo {
  id: number;
  text: string;
}

export interface State {
  rootReducer: {
    todos: Todo[];
    removed: Todo[];
  };
}

const initialState: State = {
  rootReducer: {
    todos: [],
    removed: [],
  },
};

const todosReducer = (
  state: Todo[] = initialState.rootReducer.todos,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return [...state, action.payload];
    case ActionTypes.REMOVE_TODO:
      const removedTodo = state.find((todo) => todo.id === action.payload?.id);
      if (removedTodo) {
        return state.filter((todo) => todo.id !== action.payload?.id);
      }
      return state;
    default:
      return state;
  }
};

const removedReducer = (
  state: Todo[] = initialState.rootReducer.removed,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO_TO_REMOVED:
      return [...state, action.payload];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todos: todosReducer,
  removed: removedReducer,
});

export default rootReducer;
