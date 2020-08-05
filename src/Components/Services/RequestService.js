import axios from 'axios';
const API_URL = 'http://aficionadoleague.ru';

export default class RequestService{

    constructor(){}
	
    sendRequest(request){
        const url = `${API_URL}/api/request/`;
        //return axios.post(url,request);
	return axios.post(url, {
	    data: request,
            responseType: 'json',
	    xsrfHeaderName: "X-CSRFToken",
	})
    }
}
