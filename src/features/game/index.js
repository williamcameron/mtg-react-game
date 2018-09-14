import React, { Component } from 'react';
import Deck from '../deck';
import Hand from '../hand';
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
            hand: [
            {
                name: 'Forest',
                image: 'forest.jpg'
            }
            ]
        };

        this.onClick = this.onClick.bind(this);
    }


    onClick(){
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
            <Deck deck={ this.state.deck } onClick={ this.onClick } />
            <Hand hand={ this.state.hand }/>
        </div>
       );
    }
}


export default Game;