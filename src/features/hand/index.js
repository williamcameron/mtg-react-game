import React, { Component } from 'react';
import './Hand.css';
class Hand extends Component {

    render() {
       return (
       <div className="Hand">
            <h2>Hand</h2>
            <ul>
                {
                this.props.hand.map((card) => (
                    <li>
                        <img width="200" src={ card.image } title={ card.name }></img>
                    </li>
                ))
                }
            </ul>
        </div>
       );
    }
}


export default Hand;