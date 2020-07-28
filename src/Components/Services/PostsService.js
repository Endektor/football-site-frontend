import axios from 'axios';
const API_URL = 'http://aficionadoleague.ru';

export default class PostsService{

    constructor(){}

    getPosts() {
        const url = `${API_URL}/api/posts/`;
        return axios.get(url).then(response => response.data);
    }
    getPostsByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    getPost(id) {
        const url = `${API_URL}/api/posts/${id}`;
        return axios.get(url).then(response => response.data);
    }
}
