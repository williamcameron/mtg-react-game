const initialState = {
    cards: [{
        name: 'Forest'
    }, 
    {
        name: 'Forest'
    }, 
    {
        name: 'Forest'
    }]
};

const deckReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case 'DRAW_CARD':
            return {
                ...action.payload
            };
    }
};

export default deckReducer;