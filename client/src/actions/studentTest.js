import axios from 'axios';
import { FETCH_STUDENT_TESTS } from './types';

export function getStudentTest(userID) {
    return (dispatch) => {
        return axios
            .get('/api/tests/' + userID)
            .then(res => {
                console.log(res.data);
                dispatch({ type: FETCH_STUDENT_TESTS, payload: res.data})
            })
    }
}