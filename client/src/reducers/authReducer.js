import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
    switch (action.type) {
        case FETCH_USER:
            if(action.payload.username !== undefined) {
                return action.payload;
            } else {
                return false;
            }
        default:
            return state;
    }
}
