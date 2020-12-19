import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar">
        <i className="navbar-logo fas fa-medal"></i>
        <span>Habit Tracker</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </nav>
    );
  }
}
export default Navbar;
