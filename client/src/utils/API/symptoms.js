import axios from 'axios';


export default {

    getAllSymptoms: function(data) {
        return axios.get('/api/symptoms/')
    }
}