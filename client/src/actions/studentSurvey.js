import axios from 'axios';
import { FETCH_STUDENT_SURVEY } from './types';

export function getStudentSurvey(userID) {
    return (dispatch) => {
        return axios
            .get('/api/surveys/' + userID)
            .then(res => {
                dispatch({ type: FETCH_STUDENT_SURVEY, payload: res.data})
            })
    }
}