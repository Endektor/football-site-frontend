import axios from 'axios';
const API_URL = 'http://aficionadoleague.ru';

export default class SlidesService{

    constructor(){}

    getSlides() {
        const url = `${API_URL}/api/slides/`;
        return axios.get(url).then(response => response.data);
    }
}
