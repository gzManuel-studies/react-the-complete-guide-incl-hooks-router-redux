import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burguer-acb34-default-rtdb.firebaseio.com/'
});

export default instance;