import store from '../../config/store';

export default function draw() {
    store.dispatch({
        type: 'DRAW_CARD',
        payload: {
            number_to_draw: 1
        }
    });
};