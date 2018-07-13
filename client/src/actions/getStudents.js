import axios from 'axios';
import { FETCH_STUDENT_LIST } from './types';



export function getStudentList() {
    return (dispatch) => {
        return axios
            .get('/api/students/search/')
            .then(res => {
                dispatch({ type: FETCH_STUDENT_LIST, payload: res.data})
            })
    }
}