import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '557645dff7771d13361f594b7f066884'
    },
});

export default instance;