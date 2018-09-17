import React, { Component } from 'react';
import Deck from '../deck';
import Hand from '../hand';
import Battlefield from '../battlefield';
import Graveyard from '../graveyard';


import './Game.css';


class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deck: [{
                name: 'Forest',
                image: 'forest.jpg'
            }, 
            {
                name: 'Forest',
                image: 'forest.jpg'
            }, 
            {
                name: 'Forest',
                image: 'forest.jpg'
            }],
            hand: [],
            graveyard: [],
            battlefield: []
        };

        this.drawCardFromDeckToHand = this.drawCardFromDeckToHand.bind(this);
    }


    drawCardFromDeckToHand(){
        if(this.state.deck.length){
            let popped = this.state.deck.pop();
            let hand = this.state.hand;
            hand.push(popped);
            this.setState({
                hand
            });
        } else {
            alert('Nae cards left');
        }
    }

    render() {
       return (
       <div className="Game">
            <Battlefield cards={this.state.battlefield } />
            <Deck cards={ this.state.deck } onClick={ this.drawCardFromDeckToHand } />
            <Hand cards={ this.state.hand }/>
            <Graveyard cards={this.state.graveyard } />
        </div>
       );
    }
}


export default Game;