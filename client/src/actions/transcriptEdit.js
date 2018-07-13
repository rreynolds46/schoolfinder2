import axios from 'axios';

export function transcriptEdit(imageItem) {
    return dispatch => {
        return axios.post('/api/transcript', imageItem)
            .then(console.log("test"))
            ;    }
}
