import { FETCH_STUDENT_PROFILE } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_STUDENT_PROFILE:
            return action.payload;
        default:
            return state;
    }
}
