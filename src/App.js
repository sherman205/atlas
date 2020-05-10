import React from 'react';
import logo from './logo.svg';
import MapView from './views/MapView';
import LoginPage from './views/LoginPage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <LoginPage >
        <MapView />
      </ LoginPage>
    </div>
  );
}

export default App;
