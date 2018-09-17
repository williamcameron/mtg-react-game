import React, { Component } from 'react';
import './Battlefield.css';
class Battlefield extends Component {

    render() {
       return (
       <div className="Battlefield">
            <h2>Battlefield</h2>
            <ul>
                {
                this.props.cards.map((card) => (
                    <li>
                        <img width="200" src={ card.image } title={ card.name } alt={ card.name }></img>
                    </li>
                ))
                }
            </ul>
        </div>
       );
    }
}

export default Battlefield;