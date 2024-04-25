import { Todo } from "./reducers";

export enum ActionTypes {
  ADD_TODO = "ADD_TODO",
  REMOVE_TODO = "REMOVE_TODO",
  ADD_TODO_TO_REMOVED = "Add_TODO_TO_REMOVED",
}

export interface Action {
  type: ActionTypes;
  payload?: Todo | { id: number };
}

export const addTodo = (todo: Todo) => ({
  type: ActionTypes.ADD_TODO,
  payload: todo,
});

export const removeTodo = (id: number) => ({
  type: ActionTypes.REMOVE_TODO,
  payload: { id },
});

export const addTodoToRemoved = (todo: Todo) => ({
  type: ActionTypes.ADD_TODO_TO_REMOVED,
  payload: todo,
});
