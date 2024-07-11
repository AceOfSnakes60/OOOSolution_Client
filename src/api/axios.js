import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://LocalHost:8080',
    timeout: 1000,
    header: {'X-Custom-Header': 'foobar'}
});

export default instance;