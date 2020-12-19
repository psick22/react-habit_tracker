import React, { PureComponent } from "react";

class Navbar extends PureComponent {
  state = {};
  render() {
    console.log("navbar");
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
