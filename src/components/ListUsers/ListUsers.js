import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterUsers } from '../../actions';
import './style.css';

class ListUsers extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.onSearchChange(event.target.value);
  }
  render() {
    return (
      <div className="listUsers">
        <div className="searchContainer">
          <input type="text" onChange={this.handleChange} value={this.props.search}/>
        </div>
        <ul className="listContainer">
          {this.props.filteredUsers.map(user => <li key={user.id} className="user">
            <div className="firstName">{user.first_name}</div>
            <div className="email">{user.email}</div>
          </li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: val => {
      dispatch(filterUsers(val));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListUsers);
