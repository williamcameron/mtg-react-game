import React, { Component } from 'react';
import './Deck.css';

class Deck extends Component {

    render() {
    
        return (
            <div className="Deck">
                <div onClick={ this.props.onClick }>
                <div className="deckCount">{this.props.cards.length}</div>
                    <img width="200" src='card_back.jpg' title={this.props.cards.length} alt={this.props.cards.length}></img>
                </div>
            </div>
        );
               
    }
}


export default Deck;