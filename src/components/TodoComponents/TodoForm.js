import React from "react";
// import { render } from "react-dom";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addItem(this.state.item);
  };

  handleChanges = event => {
    this.setState({ [event.target.name]: [event.target.value] });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.item}
            name="item"
            onChange={this.handleChanges}
          />
          <button>Add</button>
        </form>
      </>
    );
  }
}

export default TodoForm;
