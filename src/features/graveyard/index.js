import React, { Component } from 'react';
import './Graveyard.css';
class Graveyard extends Component {

    render() {
       return (
       <div className="Graveyard">
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


export default Graveyard;