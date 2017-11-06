import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class NavBar extends Component {
  render() {
    return (
      <div className="navBar">
        <Link to="list">
          List
        </Link>
        <Link to="add">
          Add
        </Link>
      </div>
    );
  }
}

export default NavBar;
