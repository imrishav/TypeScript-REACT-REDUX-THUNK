import {
  fetchTodos,
  DeleteAllTodos,
  DeleteTodoActions,
  FetchTodoActions,
} from './todos';

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
  deleteAll,
}

export type Action = FetchTodoActions | DeleteAllTodos | DeleteTodoActions;
