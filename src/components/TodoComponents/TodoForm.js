import React from "react";

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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={this.state.item}
            name="item"
            onChange={this.handleChanges}
          />
        </form>
        <button>Add</button>
      </>
    );
  }
}

export default TodoForm;
