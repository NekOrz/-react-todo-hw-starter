const { Component } = React;

class Header extends Component {
  render() {
    return (
      <div>
        <h1>todos</h1>
        <input class="new-todo" placeholder="What needs to be done?" autofocus />
      </div>
    );
  }
}

class Main extends Component {
  render() {

  }
}


class TodoApp extends Component {
  render() {
    return <div>Hello</div>
  }
}





ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);
