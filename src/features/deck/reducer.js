const initialState = {
    cards: [{
        name: 'Forest'
    }, 
    {
        name: 'Forest'
    }, 
    {
        name: 'Forest'
    }],
    floating_card: null
};

const deckReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case 'DRAW_CARD':
            let popped_card =  state.cards.pop(); // draw a card
            
            return {
                ...state,
                floating_card: popped_card, // should this be in the redux store? how do we access it from our action
                ...action.payload
            };
    }
};

export default deckReducer;