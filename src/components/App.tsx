import React, { Component, Dispatch } from 'react';
import { connect } from 'react-redux';
import { fetchTodos, Todo, deleteTodo, deleteAll } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
  deleteAll: typeof deleteAll;
}

interface AppState {
  fetching: boolean;
}

class _App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { fetching: false };
  }

  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  };

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  deletesTodo = (id: number): void => {
    this.props.deleteTodo(id);
  };

  deleteAllTodo = (): void => {
    this.props.deleteAll();
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo) => {
      return (
        <div onClick={() => this.deletesTodo(todo.id)} key={todo.id}>
          {todo.title}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch Todo</button>
        <button onClick={this.deleteAllTodo}>Delete All Todo</button>
        {this.state.fetching ? 'Loading...' : null}
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, {
  fetchTodos,
  deleteTodo,
  deleteAll,
})(_App);
