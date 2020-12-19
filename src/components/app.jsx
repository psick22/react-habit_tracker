import React, { Component } from "react";

import "./app.css";
import Habits from "./habits";
import Navbar from "./navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Learning", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
    sum: 0,
  };
  handleIncrement = (habit) => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits[index].count++;

    // 오브젝트의 하위 값만 변경해서 업데이트하면 shallow comparison 에서 스킵되서 렌더링이 되지 않을 수도 있음
    // 따라서, 오브젝트 값을 업데이트가 일어 날때마다 새로운 오브젝트를 생성하는 것으로 로직 변경
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        // habit object를 그대로 복사해서 새로운 오브젝트 생성 {...habit} - deconstructing object
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });

    this.setState({ habits: habits });
  };
  handleDecrement = (habit) => {
    const count = habit.count - 1;
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });

    this.setState({ habits: habits });
  };
  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits: habits });
  };
  handleAdd = (name) => {
    const habits = [
      ...this.state.habits,
      { id: Date.now(), name: name, count: 0 },
    ];
    this.setState({ habits: habits });
  };
  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      habit.count = 0;
      return habit;
    });
    this.setState({ habits: habits });
  };

  render() {
    return (
      <section>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        ></Navbar>
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </section>
    );
  }
}

export default App;
