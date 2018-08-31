import { createStore, combineReducers } from 'redux';
import deckReducer from '../features/deck/reducer';
import handReducer from '../features/hand/reducer';

const rootReducer = combineReducers({
    deck: deckReducer,
    hand: handReducer
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;