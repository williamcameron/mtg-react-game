import store from '../../config/store';

export default function draw() {

    store.dispatch({
        type: 'ADD_CARD_TO_HAND',
        payload: {
            card: store.getState().deck.cards.pop()
        }
    });

    store.dispatch({
        type: 'REMOVE_TOP_CARD',
        payload: {
            
        }
    });
};