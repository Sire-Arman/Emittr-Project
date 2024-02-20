import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import store from './store';
import HomePage from './Component/HomePage';
import Login from './Component/Login';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/login' element={<Login />} />
          </Routes>
        </Router>
      </Provider>
    );
  }
}

export default App;
