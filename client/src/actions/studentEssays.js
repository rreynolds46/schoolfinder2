import axios from 'axios';
import { FETCH_STUDENT_ESSAYS } from './types';

export function getStudentEssay(userID) {
    return (dispatch) => {
        return axios
            .get('/api/essays/' + userID)
            .then(res => {
                console.log(res.data);
                dispatch({ type: FETCH_STUDENT_ESSAYS, payload: res.data})
            })
    }
}