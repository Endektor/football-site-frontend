import axios from 'axios';
const API_URL = 'http://aficionadoleague.ru';

export default class PlayersService{

    constructor(){}

    getPlayers() {
        const url = `${API_URL}/api/players/`;
        return axios.get(url).then(response => response.data);
    }
    getPlayersByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    getPlayer(id) {
        const url = `${API_URL}/api/players/${id}`;
        return axios.get(url).then(response => response.data);
    }
}
