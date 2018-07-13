import axios from 'axios';
import { FETCH_SCHOOL_LIST } from './types';



export function getSchoolList() {
    return (dispatch) => {
        return axios
            .get('/api/schools/search/')
            .then(res => {
                dispatch({ type: FETCH_SCHOOL_LIST, payload: res.data})
            })
    }
}