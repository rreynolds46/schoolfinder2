import axios from 'axios';

export function schoolProfileEdit(profileData, school) {
    return dispatch => {
        return axios.put('/api/schools/' + school, profileData)
            .then(res => {
              console.log(res)   
            })
            .catch(err => {
                console.log(err)});
    }
}
