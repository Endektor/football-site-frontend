import React, { Component } from 'react';
import TournamentsService from '../../Services/TournamentsService.js';
import './Tournaments.css';
import vk_img from './vk.png';
import './script.js';

const tournamentsService = new TournamentsService();


class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tournaments: {},
        };

    }

    makeTableSort(unsorted_table) {
        let sorted_table = unsorted_table;

        // console.log("unsorted table")
        //
        // console.log(unsorted_table)


        for (let j = sorted_table.length - 1; j > 0; j--) {
            for (let i = 0; i < j; i++) {
                if (sorted_table[i].score < sorted_table[i + 1].score) {
                    let temp = sorted_table[i];
                    sorted_table[i] = sorted_table[i + 1];
                    sorted_table[i + 1] = temp;
                }
            }
        }

        // console.log("sorted table (score)")
        // console.log(sorted_table)

        for(let k = 0; k < 10; k++) {
            for (let i = 0; i < sorted_table.length - 1; i++) {
                if ((sorted_table[i].score == sorted_table[i + 1].score) && (sorted_table[i].difference < sorted_table[i + 1].difference)) {
                    let temp = sorted_table[i];
                    sorted_table[i] = sorted_table[i + 1];
                    sorted_table[i + 1] = temp;
                }
            }
        }

        // console.log("sorted table (score + diff)")
        // console.log(sorted_table)

        return (sorted_table);
    }


    componentDidMount() {
        const self = this;
        const { match: { params } } = this.props;
        tournamentsService.getTournament(params.id).then(function (result) {
            self.setState({ tournaments: result.data})
        });
    }

    render() {
        if(this.state.tournaments.tour) {

            let temp_member_detail = this.makeTableSort(this.state.tournaments.member_detail);
            this.state.tournaments.tour.reverse();

            let self = this;

            return (
                <div>
                    <div className="mainBg">
                    <div className="container">
                        <div className="tournament">
                            <h2 className="tournamentHeader">
                                Турнирная таблица
                            </h2>
                            <div className="tournamentTable">
                                <div className="tableRow">
                                    <div className="place">№</div>
                                    <div className="team">Команда</div>
                                    <div className="index">
                                        <ul>
                                            <li>И</li>
                                            <li>В</li>
                                            <li>Н</li>
                                            <li>П</li>
                                            <li>ГЗ</li>
                                            <li>ГП</li>
                                            <li>Р</li>
                                            <li>О</li>
                                        </ul>
                                    </div>
                                </div>

                                {temp_member_detail.map( (team_str, count) =>

                                    <div className="tableRow">
                                        <div className="place">{count + 1}</div>
                                        <div className="team">
                                            <img src={team_str.team.img} className="teamLogo" alt="teamLogo"/>
                                            {/*<img src={vk_img} className="teamLogo" alt="teamLogo"/>*/}
                                            <div className="teamName">{team_str.team.name}</div>
                                        </div>
                                        <div className="index">
                                            <ul>
                                                <li><div className="score">{team_str.wins_amount + team_str.draws_amount + team_str.defeats_amount}</div></li>
                                                <li><div className="score">{team_str.wins_amount}</div></li>
                                                <li><div className="score">{team_str.draws_amount}</div></li>
                                                <li><div className="score">{team_str.defeats_amount}</div></li>
                                                <li><div className="score">{team_str.goals_amount}</div></li>
                                                <li><div className="score">{team_str.miss_amount}</div></li>
                                                <li><div className="score">{team_str.difference}</div></li>
                                                <li><div className="score">{team_str.score}</div></li>
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>


                        {/*------------------------------------------------*/}





                                {this.state.tournaments.tour.map( (tour, count) =>
                                    <div className="tours">
                                        <h2 className="tournamentHeader">{tour.name}</h2>
                                        <div className="matchTable">
                                            <div className="tableRow">
                                                <div className="matchDate">Дата</div>
                                                <div className="match">Матч</div>
                                                <div className="matchMedia">
                                                    <div className="protocols">Фотоотчет</div>
                                                    <div className="protocols">Протоколы</div>
                                                </div>
                                            </div>

                                {tour.tour_data.map( match =>

                                            <div className="tableRow">
                                            <div className="matchDate">{match.date}</div>
                                            <div className="match">
                                                <div className="matchTour">{match.team1.name}</div>
                                                <img src={match.team1.img} className="teamLogo" alt="teamLogo"/>
                                                {/*<img src={vk_img} className="teamLogo" alt="teamLogo"/>*/}
                                                <div className="scoreTour">{match.team1_goals}</div>
                                                :
                                                <div className="scoreTour">{match.team2_goals}</div>
                                                <img src={match.team2.img} className="teamLogo" alt="teamLogo"/>
                                                {/*<img src={vk_img} className="teamLogo" alt="teamLogo"/>*/}
                                                <div className="matchTour">{match.team2.name}</div>
                                            </div>
                                            <div className="matchMedia">
                                                <a href="#" className="matchPhoto">Скачать</a>
                                                <a href="#" className="matchPhoto">Скачать</a>
                                            </div>
                                        </div>
                                    )
                                }
                                    </div>
                                    </div>
                                )}

                                {/*------------------------------------------------*/}

                        </div>
                    </div>
                </div>
            );
        } else {
            return(
            <div>loading...</div>
            )
        }
    }
}

export default News;