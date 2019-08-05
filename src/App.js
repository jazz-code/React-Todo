import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

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

  addItem = taskName => {
    const newItem = {
      task: taskName,
      date: Date.now(),
      completed: false
    };
    this.setState({
      list: [...this.state.list, newItem]
    });
  };

  toggleItem = id => {
    this.setState({
      list: this.state.list.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  render() {
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
        </div>
        <TodoForm addItem={this.addItem} />
        <TodoList list={this.state.list} toggleItem={this.toggleItem} />
      </div>
    );
  }
}
export default App;
