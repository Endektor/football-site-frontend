import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class SlidesService{

    constructor(){}

    getSlides() {
        const url = `${API_URL}/api/slides/`;
        return axios.get(url).then(response => response.data);
    }
}