import React, { Component } from 'react';
import logo from './logo.svg';
import MapView from './views/MapView';
import Login from './views/Login';
import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //this is where you call the api and check for authentication
  }

  render() {
    return (
      <div className="App">
        <MapView />
        {/* <Login /> */}
      </div>
    );
  }
}

export default App;
