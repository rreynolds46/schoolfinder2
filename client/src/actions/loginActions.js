import axios from 'axios';
import { FETCH_USER } from '../actions/types';


export function userLogin(userData) {
    return dispatch => {
        return axios
            .post('/api/login', userData)
            .then(res => {
                if(res.data.successful) {
                    axios.get('/api/current_user').then(res => {
                        const id = res.data._id;
                        dispatch({ type: FETCH_USER, payload: res.data})
                        this.history.push(`/users/${id}`);
                    });
                }
            })
    };
}
