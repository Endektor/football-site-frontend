import React from 'react';
import './Header.css';
import news_img from './icons/news.png';
import request_img from './icons/request.png';
import logo_img from './icons/logoamateur.png';
import trophy_img from './icons/trophy.png';
import vk_img from './icons/vk.png';
import inst_img from './icons/instagram.png';
import mc_img from './icons/MC.png'

const Contacts = (props) => {

    return (
        <div>
            {/*<div className="header">*/}
            {/*    <div className="container">*/}
            {/*        <div className="top">*/}
            {/*            <div className="leagueName">*/}
            {/*                AficionadoLeague*/}
            {/*            </div>*/}
            {/*            <div className="active">*/}
            {/*                <a href="/" className="navBtn">*/}
            {/*                    <img src={news_img} alt="newspapperIcon" width="40px"/>*/}
            {/*                        <div href="#" className="navLink">Новости</div>*/}
            {/*                </a>*/}
            {/*                <a href="/tournaments/1" className="navBtn">*/}
            {/*                    <img src={trophy_img} alt="trophyIcon" width="40px"/>*/}
            {/*                        <div className="navLink">Турнирная таблица</div>*/}
            {/*                </a>*/}
            {/*                <a href="https://forms.gle/ysjfyzazvUehjU3h6" className="navBtn">*/}
            {/*                    <img src={request_img} alt="requestIcon" width="40px"/>*/}
            {/*                        <div className="request navLink">Оставить заявку</div>*/}
            {/*                </a>*/}
            {/*            </div>*/}
            {/*            <div className="connect">*/}
            {/*                <div className="srcIcons">*/}
            {/*                    <a href="https://vk.com/alexgeniusman">*/}
            {/*                        <img src={vk_img} alt="vk" width="24px" height="24px"/>*/}
            {/*                    </a>*/}
            {/*                    <a href="https://www.instagram.com/alliance_reden/?hl=ru">*/}
            {/*                        <img src={inst_img} alt="inst" width="24px" height="24px"/>*/}
            {/*                    </a>*/}
            {/*                </div>*/}
            {/*                <div className="addition">*/}
            {/*                    <a href="#footer" className="contacts">*/}
            {/*                        Контакты*/}
            {/*                    </a>*/}
            {/*                    <a href="/rules" className="rules">*/}
            {/*                        Правила*/}
            {/*                    </a>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="header">
                <div className="league">
                    <img src={mc_img} alt="mainLogo" className="mainLogo"/>
                        <div className="leagueName">
                            AficionadoLeague
                        </div>
                </div>
                <div className="active">
                    <a href="/" className="navBtn">
                        <div href="#" className="navLink">Новости</div>
                    </a>

                    <a href="/tournaments/1" className="navBtn">
                        <div className="navLink">Турнирная таблица</div>
                    </a>
                    <a href="https://forms.gle/ysjfyzazvUehjU3h6" className="navBtn">
                        <div className="request navLink">Оставить заявку</div>
                    </a>
                </div>
                <div className="connect">
                    <div className="srcIcons">
                        <a href="https://vk.com/alexgeniusman">
                            <img src={vk_img} alt="vk" width="24px" height="24px"/>
                        </a>
                        <a href="https://www.instagram.com/alliance_reden/?hl=ru">
                            <img src={inst_img} alt="inst" width="24px" height="24px"/>
                        </a>
                    </div>
                    <a href="#footer" className="contacts">
                        Контакты
                    </a>
                    <a href="#" className="contacts">
                        Правила
                    </a>
                </div>
            </div>
        </div>

    );
};

export default Contacts;