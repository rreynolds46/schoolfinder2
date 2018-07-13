import { FETCH_STUDENT_LIST } from '../actions/types';

export default function(state = null, action) {
    switch (action.type) {
        case FETCH_STUDENT_LIST:
            return action.payload;
        default:
            return state;
    }
}
