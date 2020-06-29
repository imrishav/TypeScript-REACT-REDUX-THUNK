import { Todo, ActionTypes, Action } from '../actions';

export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter((t: Todo) => t.id !== action.payload);
    case ActionTypes.deleteAll:
      return action.payload;

    default:
      return state;
  }
};
