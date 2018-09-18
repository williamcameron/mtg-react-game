import React, { Component } from 'react';
import './Hand.css';
class Hand extends Component {

    render() {
       return (
       <div className="Hand">
            <h2>Hand</h2>
            <ul>
                {
                this.props.cards.map((card) => (
                    <li>
                        <img width="200" src={ card.image } title={ card.name } alt={ card.name }  onClick={ this.props.onClick }></img>
                    </li>
                ))
                }
            </ul>
        </div>
       );
    }
}


export default Hand;