import axios from 'axios';
import { FETCH_SCHOOL_PROFILE } from '../types';



export function getSchoolProfile(school) {
    return (dispatch) => {
        return axios
            .get('/api/schools/' + school)
            .then(res => {
                dispatch({ type: FETCH_SCHOOL_PROFILE, payload: res.data})
            })
    }
}