import React, { Component } from 'react';
import Game from './features/game';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { something: '' };
  }

  componentWillMount(){
    this.setState({
      something: 'World!!'
    })
  }

  render() {
    return (
      <div className="App">
        <Game myProp={this.state.something} />
      </div>
    );
  }
}

export default App;
