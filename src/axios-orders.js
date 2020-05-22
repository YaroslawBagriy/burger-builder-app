import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-c38c8.firebaseio.com/'
});

export default instance;