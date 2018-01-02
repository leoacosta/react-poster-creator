import React, { Component } from 'react';
import CardTitle from './components/CardTitle'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CardTitle cardCat="Tango" cardTitle="Buenos Aires" />
      </div>
    );
  }
}

export default App;
