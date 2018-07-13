import axios from 'axios';

export function surveyEdit(surveyData, userID) {
    return dispatch => {
        return axios.put('/api/surveys/' + userID, surveyData)
        .then(res => {
            console.log(res)   
          })
          .catch(err => {
              console.log(err)});
  }
};
