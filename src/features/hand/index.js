import React, { Component } from 'react';
import './Hand.css';
class Hand extends Component {

    render() {
       return (
       <div className="Hand">
            <h2>Hand ({this.props.cards.length} cards)</h2>
            <ul>
                {
                this.props.cards.map((card, i) => (
                    <li>
                        <img width="150" src={ card.image } title={ card.name } alt={ card.name } onClick={ () => this.props.moveCardFromHandToBattlefield(i) }></img>
                    </li>
                ))
                }
            </ul>
        </div>
       );
    }
}


export default Hand;