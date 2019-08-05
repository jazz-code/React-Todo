import React from "react";
import TodoList from "./components/TodoComponents/TodoList";

const list = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list
    };
  }

  addItem = () => {
    const newItem = {
      name: itemName,
      date: Date.now(),
      completed: false
    };
    this.setState({
      list: [...this.state.list, newItem]
    });
  };

  render() {
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
        </div>
        <TodoList list={this.state.list} />
      </div>
    );
  }
}
export default App;
