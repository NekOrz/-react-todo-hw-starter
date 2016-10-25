const { Component } = React;

class Header extends Component {

  constructor(props) {
    super(props);
    this.keyDown = this.keyDown.bind(this);
  }
  keyDown(event) {
    if (event.keyCode === 13) {
      this.props.addItem(ReactDOM.findDOMNode(this.refs.input).value);
      console.log('add');
    }
  }
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input ref="input" className="new-todo" placeholder="What needs to be done?" autoFocus onKeyDown={this.keyDown}/>
      </header>
    );
  }
}

Header.propTypes = {
  addItem: React.PropTypes.func.isRequired
}

class Main extends Component {
  render() {
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <TodoList numItems={this.props.numItems} objItems={this.props.objItems}/>
      </section>
    );
  }
}

class TodoList extends Component {
  render() {
    return (
      <ul className="todo-list">
        {this.props.objItems.map((v) => {
          return (
            <TodoItem text={v['text']}/>
          );
        })}
      </ul>
    );
  }
}

class TodoItem extends Component {
  render() {
    return <li>{this.props.text}</li>;
  }
}

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
    		<CountDisplay count={this.props.count} />
    		<button className="clear-completed">Clear completed</button>
  	  </footer>
    );
  }
}

class CountDisplay extends Component {
  render() {
    return (
      <span className="todo-count">{this.props.count}</span>
    );
  }
}

class TodoApp extends Component {
  constructor() {
    console.log('hey!');
    super();
    this.state = {
      numItems: 0,
      objItems: []
    };

    this.addItem = this.addItem.bind(this);
  }
  addItem(text) {
    this.setState({
      numItems: this.state.numItems + 1,
      objItems: this.state.objItems.concat([{text: text}])
    })
    console.log(this.state.objItems[this.state.numItems - 1]);

  }


  render() {
    return (
      <section className="todoapp">
        <Header addItem={this.addItem}/>
        <Main numItems={this.state.numItems} objItems={this.state.objItems}/>
        <Footer count={this.state.numItems}/>
      </section>
    );
  }
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);
