import axios from 'axios';



export function userLogout() {
    return dispatch => {
        return axios.get('/api/signout')
            .then(res => {
                window.location = '/';
            });
    }
}

