import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class HeaderService{

    constructor(){}

    getNames() {
        const url = `${API_URL}/api/names/`;
        return axios.get(url).then(response => response.data);
    }
}