import axios from 'axios';
import { FETCH_STUDENT_PROFILE } from './types';



export function getUserProfile(userID) {
    return (dispatch) => {
        return axios
            .get('/api/users/' + userID)
            .then(res => {
                dispatch({ type: FETCH_STUDENT_PROFILE, payload: res.data})
            })
    }
}