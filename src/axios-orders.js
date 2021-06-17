import axios from 'axios';

const Instance = axios.create({
    baseURL: 'https://react-my-burger-b7a20-default-rtdb.firebaseio.com/'
});

export default Instance;
