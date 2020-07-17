import React, { Component } from 'react';


const Membership = (props) => {

        return (
            <div>
                <p>количество игр: {props.state.games_amount}</p>
                <p>победы: {props.state.wins_amount}</p>
                <p>ничьи: {props.state.draws_amount}</p>
                <p>поражения: {props.state.defeats_amount}</p>
            </div>

        );
};

export default Membership;