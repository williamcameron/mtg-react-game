import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      something: 'World!'
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <p>{this.state.something}</p>
      </div>
    );
  }
}

export default App;
