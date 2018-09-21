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
            battlefield: [],
            mana: 0
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
        let mana;

        card.tapped =  !card.tapped;

        if (card.tapped) {
            mana = this.state.mana;
            mana++;
        }

        this.setState({
            card,
            mana
        })
    }
    moveCardFromHandToBattlefield(cardToMove){
        if(this.state.hand.length){

            let theOne = this.state.hand.filter((card, i) => i==cardToMove);
            let theRest = this.state.hand.filter((card, i) => i!=cardToMove);
            
            let battlefield = this.state.battlefield;
            battlefield.push(theOne[0]);
            this.setState({
                battlefield,
                hand: theRest
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
                        <Hand cards={ this.state.hand } moveCardFromHandToBattlefield={ this.moveCardFromHandToBattlefield }/>
                    </div>
                    <div className="cardZone">
                        <Deck cards={ this.state.deck } onClick={ this.drawCardFromDeckToHand } />
                        <Graveyard cards={this.state.graveyard } />
                        {
                            [1,2,3,4,5].map(() => (
                                <span>hi</span> 
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
       );
    }







    getDeck(){ 
        
        let cards = Array();
        for(let i=0;i<25;i++){
            cards.push({
                name: 'Forest',
                image: 'forest.jpg',
                tapped: false,
                land: true,
                creature: false,
            });
        }
        for(let i=0;i<15;i++){
            cards.push({
                name: 'Runeclaw Bear',
                image: 'runeclaw-bear.jpg',
                tapped: false,
                land: false,
                creature: true,
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