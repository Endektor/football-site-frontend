import React from 'react';
import './Header.css';
import vk_img from './icons/vk.png';
import inst_img from './icons/instagram.png';
import mc_img from './icons/MC.png'

const Contacts = (props) => {

    return (
        <div>
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

                    <div className="navBtn dropBtn">
                        <div className="navLink">Турниры</div>
                        <div className="dropdownContent">
                            <a href="/tournaments/1">Турнир1</a>
                            <a href="/tournaments/2">Турнир2</a>
                        </div>
                    </div>
                    <a href="https://forms.gle/ysjfyzazvUehjU3h6" className="navBtn">
                        <div className="request navLink">Оставить заявку</div>
                    </a>
                </div>
                <div className="connect">
                    <div className="srcIcons">
                        <a href="https://vk.com/aficionadoleague">
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