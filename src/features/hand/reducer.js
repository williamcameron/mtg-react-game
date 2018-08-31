const initialState = {
    cards: []
};

const handReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case 'ADD_CARD_TO_HAND':
            state.cards.push(action.payload.card);

            return {
                ...state,
                
            };
    }
};

export default handReducer; 