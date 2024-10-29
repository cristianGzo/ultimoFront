import axios from 'axios';

const apiR = axios.create({
    RL:'http://127.0.0.1:8000',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default apiR;