import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Header from './Components/Header/Header.jsx'
import News from './Components/News/News.jsx'
import Players from './Components/Info/Players/Players.jsx'
import Player from './Components/Info/Players/Player.jsx'
import Teams from './Components/Info/Teams/Teams.jsx'
import Team from './Components/Info/Teams/Team.jsx'
import Tournaments from './Components/Info/Tournaments/Tournaments.jsx'
import Contacts from './Components/Contacts/Contacts.jsx'
import Request from './Components/Request/Request.jsx'
import Rules from './Components/Rules/Rules.jsx'
import './App.css';
import Footer from "./Components/Footer/Footer";
import page_404 from "./Components/404/404";
import { BrowserRouter as Router, withRouter } from "react-router-dom";

function App() {
    return (
        <div>
            <Header/>
            <Route path='/' exact render={ () => <News/>}/>
            <Route path='/news' render={ () => <News/>}/>
            <Route path='/players' exact render={ () => <Players/>}/>
            <Route path='/players/:id' component={Player}  />
            <Route path='/teams' exact render={ () => <Teams/>}/>
            <Route path='/teams/:id' component={Team}/>
            <Route path='/tournaments' exact render={ () => <Tournaments/>}/>
            <Route path='/tournaments/:id' component={Tournaments}/>
            <Route path='/contacts' render={ () => <Contacts/>}/>
            <Route path='/request' render={ () => <Request/>}/>
            <Route path='/rules' render={ () => <Rules/>}/>
            <Footer/>
        </div>
    );
}

export default App;
