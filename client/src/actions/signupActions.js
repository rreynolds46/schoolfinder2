import axios from 'axios';

export function userSignup(userData) {
    return dispatch => {
        return axios.post('/api/users', userData);
    }
}
