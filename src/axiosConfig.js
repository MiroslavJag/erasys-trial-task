import axios from 'axios';

export const GET_PROFILES = 'search?length=12'
export const GET_PROFILE = 'profiles?ids='
export const GET_ALL_PROFILES_IDS = 'profiles?'
export const GET_IDS = '&ids='
export const GET_CURSOR = '&cursor='

const apiInstance = axios.create({
    baseURL: 'http://localhost:3000/api/',
    headers: {
        "Content-Type": "application/Jason",
        "Access-Control-Allow-Origin": "*"
    }
});

export default apiInstance;
