import React from 'react';
import './404.css';

const page_404 = (props) => {

    return (
        <div className="error">
            <div className="errorContainer">
                <h2>Страница не найдена :(</h2>
                <h1>404</h1>
                <p>Не попал на страницу? - Попадешь по воротам!</p>
                <a href="https://vk.com/alexgeniusman">На главную</a>
            </div>
        </div>
    );
};

export default page_404;