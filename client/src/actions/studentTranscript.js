import axios from 'axios';
import { FETCH_STUDENT_TRANSCRIPT } from './types';

export function getStudentTranscript(userID) {
    return (dispatch) => {
        return axios
            .get('/api/transcript/' + userID)
            .then(res => {
                dispatch({ type: FETCH_STUDENT_TRANSCRIPT, payload: res.data})
            })
    }
}