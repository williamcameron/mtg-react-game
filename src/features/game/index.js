import React, { Component } from 'react';
import Deck from '../deck';
import Hand from '../hand';


import './Game.css';


class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentWillMount() {
        this.setState({
           
        });

        // const cards = store.getState().deck.cards;

        
    }

    render() {
       return (
       <div className="Game">
            <Deck />
            <Hand />
        </div>
       );
    }
}


export default Game;