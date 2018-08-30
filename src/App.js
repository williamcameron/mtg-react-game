import React, { Component } from 'react';
import Game from './features/game';
import './App.css';
import draw from './features/deck/draw';

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

  onClick() {
    draw();
  }

  render() {
    return (
      <div className="App">
        <Game myProp={this.state.something} />
        <div onClick={ this.onClick }>Draw Card</div> 
      </div>
    );
  }
}

export default App;
