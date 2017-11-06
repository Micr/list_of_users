import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootReducer from './reducers/RootReducer.js';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ListUsers from './components/ListUsers/ListUsers';
import AddUser from './components/AddUser/AddUser';
import Root from './components/Root';

const store = createStore(RootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Root>
            <NavBar />
            <Switch>
              <Route exact path="/" component={ListUsers}/>
              <Route path="/list" component={ListUsers}>
              </Route>
              <Route path="/add" component={AddUser}>
              </Route>
            </Switch>
          </Root>
        </Router>
      </Provider>
    );
  }
}

export default App;
