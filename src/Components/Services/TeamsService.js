import axios from 'axios';
const API_URL = 'http://aficionadoleague.ru';

export default class TeamsService{

    constructor(){}

    getTeams() {
        const url = `${API_URL}/api/teams/`;
        return axios.get(url).then(response => response.data);
    }
    getTeamsByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    getTeam(id) {
        const url = `${API_URL}/api/teams/${id}`;
        return axios.get(url).then(response => response.data);
    }
}
