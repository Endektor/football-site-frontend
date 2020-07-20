import React from 'react';
import './Footer.css';

const Footer = (props) => {

    return (
        <div>
            <div className="footerContainer">
                <div className="footer" id="footer">
                    <div>
                        <div>Такойто Владимир Владимирович - 8-800-555-35-35</div>
                        <div className="nameContact">ФИО - Номер телефона</div>
                        <div>pochta@mail.ru</div>
                    </div>
                    <div className="address">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.1768945230324!2d37.48338021604385!3d55.6685240059562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54da6fc0e0fe3%3A0xa98068212e833b99!2z0JLQtdGA0L3QsNC00LrQsCDQn9Cw0YDQug!5e0!3m2!1sru!2sru!4v1595167053035!5m2!1sru!2sru"
                            frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"
                            className="addressMap"></iframe>
                        <div>Улица пушкина, дом колотушкина, 195228</div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;