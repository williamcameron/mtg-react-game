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
            deck: [],
            hand: [],
            graveyard: [],
            battlefield: []
        };

        this.drawCardFromDeckToHand = this.drawCardFromDeckToHand.bind(this);
        this.moveCardFromHandToBattlefield = this.moveCardFromHandToBattlefield.bind(this);
        this.tapUntapCard = this.tapUntapCard.bind(this);
        
        
    }

    componentDidMount(){
        let deck = this.getDeck();
        this.shuffle(deck); // can we change to utilise eg. lodash?
        this.setState({deck})
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
            alert('Nae cards left in deck');
        }
    }
    tapUntapCard(card) {
        card.tapped =  !card.tapped;
        this.setState({
            card
        })
    }
    moveCardFromHandToBattlefield(){
        if(this.state.hand.length){
            let popped = this.state.hand.pop();
            let battlefield = this.state.battlefield;
            battlefield.push(popped);
            this.setState({
                battlefield
            });
        } else {
            alert('Nae cards left in hand');
        }
    }

    render() {
       return (
       <div className="Game">
            <div>
                <div className="opponentZone"></div>
                <div className="playerZone">
                    <div className="gameZone">
                        <Battlefield cards={this.state.battlefield } onClick={ this.tapUntapCard } />
                        <Hand cards={ this.state.hand } onClick={ this.moveCardFromHandToBattlefield }/>
                    </div>
                    <div className="cardZone">
                        <Deck cards={ this.state.deck } onClick={ this.drawCardFromDeckToHand } />
                        <Graveyard cards={this.state.graveyard } />
                    </div>
                </div>
            </div>
        </div>
       );
    }







    getDeck(){ 
        
        let cards = Array();
        let d =  [{
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
        }, 
        {
            name: 'Runeclaw Bear',
            image: 'runeclaw-bear.jpg'
        }];
        for(let i=0;i<25;i++){
            cards.push({
                name: 'Forest',
                image: 'forest.jpg'
            });
        }
        for(let i=0;i<15;i++){
            cards.push({
                name: 'Runeclaw Bear',
                image: 'runeclaw-bear.jpg'
            });
        }
        return cards;
    }

    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

}


export default Game;