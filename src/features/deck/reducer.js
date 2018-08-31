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
        case 'REMOVE_TOP_CARD':
            state.deck.cards.pop();
            return {
                ...state,
                
            };
    }
};

export default deckReducer;