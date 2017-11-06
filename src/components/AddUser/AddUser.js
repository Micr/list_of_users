import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitUser } from '../../actions';

class AddUser extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const form = event.target.parentNode;
    const name = form.querySelector('[name="fistName"]').value;
    const email = form.querySelector('[name="email"]').value;
    this.props.submitUser({ first_name: name, email });
  }
  render() {
    return (
      <div>
        <form>
          <label>
            First name
            <input name="fistName" type="text" />
          </label>
          <label>
            email
            <input name="email" type="text" />
          </label>
          <input type="submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {
    submitUser: val => {
      dispatch(submitUser(val));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUser);
