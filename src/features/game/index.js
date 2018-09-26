import React, { Component } from 'react';
import Deck from '../deck';
import Hand from '../hand';
import Battlefield from '../battlefield';
import Graveyard from '../graveyard';
import Mana from '../mana';

import './Game.css';


class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deck: [],
            hand: [],
            graveyard: [],
            battlefield: [],
            mana: { 'red': 0, 'green':0 }
        };

        this.drawCardFromDeckToHand = this.drawCardFromDeckToHand.bind(this);
        this.moveCardFromHandToBattlefield = this.moveCardFromHandToBattlefield.bind(this);
        this.tapUntapCard = this.tapUntapCard.bind(this);
        this.error = this.error.bind(this);
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
        let mana = this.state.mana;

        card.tapped = !card.tapped;
        
        if(card.land){
            if (card.tapped) {
                mana.green++;
            } else {
                mana.green--;
            }
        }

        this.setState({
            card,
            mana
        })
    }

    error(message) {
        console.log(message);
    }
    
    moveCardFromHandToBattlefield(cardToMove) {
        if(this.state.hand.length){

            let theOne = this.state.hand.filter((card, i) => i===cardToMove)[0];
            let mana = this.state.mana;


            console.log(theOne);
            if(theOne.creature) {

                let manaConsumed = theOne.castingCost;

                if (mana.green < manaConsumed) {
                    this.error('Not enough mana');
                   return;
                }

                mana.green -= manaConsumed;
            }

            let theRest = this.state.hand.filter((card, i) => i!==cardToMove);
            
            let battlefield = this.state.battlefield;
            battlefield.push(theOne);
            this.setState({
                battlefield,
                hand: theRest,
                mana
            });
        } else {
            alert('Nae cards left in hand');
        }
    }

    render() {

        var manaOutput = []; 

        for(var i=0; i< this.state.mana.green; i++) {
            manaOutput.push(<Mana />);
        }
        
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
                        <strong>{ this.state.mana.green }</strong>
                        {
                            manaOutput
                        }
                    </div>
                </div>
            </div>
        </div>
       );
    }







    getDeck(){ 
        
        let cards = [];
        for(let i=0;i<25;i++){
            cards.push({
                name: 'Forest',
                image: 'forest.jpg',
                tapped: false,
                land: true,
                creature: false,
                castingCost: 0
            });
        }
        for(let i=0;i<15;i++){
            cards.push({
                name: 'Runeclaw Bear',
                image: 'runeclaw-bear.jpg',
                tapped: false,
                land: false,
                creature: true,
                castingCost: 2
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