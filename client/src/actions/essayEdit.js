import axios from 'axios';

export function essayEdit(essayData, userID) {
    return dispatch => {
        return axios.put('/api/essays/' + userID, essayData)
            .then(res => {
              console.log(res)   
            })
            .catch(err => {
                console.log(err)});
    }
}
