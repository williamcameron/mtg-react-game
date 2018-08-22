import React, { Component } from 'react';
import Deck from '../deck';
import Hand from '../hand';

import './Game.css';


class Game extends Component {

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