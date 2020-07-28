import axios from 'axios';
const API_URL = 'http://aficionadoleague.ru';

export default class MembershipsService{

    constructor(){}

    getMemberships() {
        const url = `${API_URL}/api/memberships/`;
        return axios.get(url).then(response => response.data);
    }
    getMembershipsByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    getMembership(id) {
        const url = `${API_URL}/api/memberships/${id}`;
        return axios.get(url).then(response => response.data);
    }
}
