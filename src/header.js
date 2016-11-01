import React, {
  Component,
  PropTypes,
} from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.keyDown = this.keyDown.bind(this);
  }
  keyDown(event) {
    if (event.keyCode === 13) {
      this.props.addItem(this.props.text);
      console.log('add');
    }
  }
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          value={this.props.text}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onKeyDown={this.keyDown}
        />
      </header>
    );
  }
}

Header.propTypes = {
  addItem: PropTypes.func.isRequired,
  text: PropTypes.string,
};
