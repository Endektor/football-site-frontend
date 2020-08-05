import  React, { Component } from  'react';
import  RequestService  from  '../Services/RequestService';

const  requestService  =  new  RequestService();

class  Request  extends  Component {

constructor(props) {
    super(props);
    this.Send = this.Send.bind(this);
}

Send(event){
    requestService.sendRequest(
    {
        "name": "logologlol"
    }
    ).then((result)=>{
        alert("OK");
    }).catch(()=>{
        alert('There was an error! Please re-check your form.');
    });
}

render() {

    return (
        <form onSubmit={this.Send}>
            <div className="form-group">
                <label>Name:</label>
                <input className="form-control" type="text" ref='Name' />
	        <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
        </form>
    );
}
}
export  default  Request;
