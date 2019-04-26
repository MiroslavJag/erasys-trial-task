import axios from 'axios';

const apiInstance = axios.create({
    baseURL: 'http://localhost:3000/api/',
    headers: {
        "Content-Type": "application/Jason",
        "Access-Control-Allow-Origin": "*"
    }
});

export default apiInstance;
