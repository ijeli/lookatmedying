import axios from 'axios';


export default {
    getAllProfile: function (data) {
        return axios.get('/api/profile/'+data)
    },

    addProfile: function (data) {
        return axios.post('/api/create/' + data)
    }
}