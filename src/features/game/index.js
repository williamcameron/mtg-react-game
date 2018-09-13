import React, { Component } from 'react';
import Deck from '../deck';
import Hand from '../hand';
import './Game.css';


class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deck: [{
                name: 'Forest'
            }, 
            {
                name: 'Forest'
            }, 
            {
                name: 'Forest'
            }],
            hand: [
            {
                name: 'Forest'
            }
            ]
        };

        this.onClick = this.onClick.bind(this);
    }


    onClick(){
        let popped = this.state.deck.pop();
        let hand = this.state.hand;
        hand.push(popped);
        this.setState({
            hand
        });
    }
    render() {
       return (
       <div className="Game">
            <Deck deck={ this.state.deck }/>
            <Hand hand={ this.state.hand }/>

            <div onClick={ this.onClick }>Draw Card</div> 
        </div>
       );
    }
}


export default Game;