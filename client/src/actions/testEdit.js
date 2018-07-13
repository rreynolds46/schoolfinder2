import axios from 'axios';

export function testEdit(testData, userID) {
    return dispatch => {
        return axios.put('/api/tests/' + userID, testData)
            .then(res => {
              console.log(res)   
            })
            .catch(err => {
                console.log(err)});
    }
}
