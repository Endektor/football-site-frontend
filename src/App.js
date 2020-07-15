import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Header from './Components/Header/Header.jsx'
import News from './Components/News/News.jsx'
import Players from './Components/Info/Players/Players.jsx'
import Teams from './Components/Info/Teams/Teams.jsx'
import Tournaments from './Components/Info/Tournaments/Tournaments.jsx'
import Contacts from './Components/Contacts/Contacts.jsx'
import Request from './Components/Request/Request.jsx'
import Rules from './Components/Rules/Rules.jsx'
import './App.css';

function App() {
    return (
        <div>
            <Header/>
            <Route path='/' exact render={ () => <News/>}/>
            <Route path='/news' render={ () => <News/>}/>
            <Route path='/players' render={ () => <Players/>}/>
            <Route path='/teams' render={ () => <Teams/>}/>
            <Route path='/tournaments' render={ () => <Tournaments/>}/>
            <Route path='/contacts' render={ () => <Contacts/>}/>
            <Route path='/request' render={ () => <Request/>}/>
            <Route path='/rules' render={ () => <Rules/>}/>
        </div>
    );
}

export default App;
