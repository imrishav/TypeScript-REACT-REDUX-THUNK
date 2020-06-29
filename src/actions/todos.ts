import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodoActions {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export interface DeleteTodoActions {
  type: ActionTypes.deleteTodo;
  payload: number;
}

export interface DeleteAllTodos {
  type: ActionTypes.deleteAll;
  payload: [];
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );

    dispatch<FetchTodoActions>({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};

export const deleteTodo = (id: number): DeleteTodoActions => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id,
  };
};

export const deleteAll = (): DeleteAllTodos => {
  return {
    type: ActionTypes.deleteAll,
    payload: [],
  };
};
