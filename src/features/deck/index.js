import React, { Component } from 'react';
import './Deck.css';

class Deck extends Component {

    render() {
    
        return (
            <div className="Deck">
                <h2>Deck</h2>
                <ul>
                    {
                        this.props.deck.map((card) => (
                            <li>{ card.name }</li>
                        ))
                    }
                </ul>
            </div>
        );
               
    }
}


export default Deck;