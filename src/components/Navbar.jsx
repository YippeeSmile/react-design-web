import React from 'react';
import '../pages/index.scss';

function Navbar() {

    return (
            <nav className="menu">
                <ul className="list menu__list">
                    <li className="menu__item">О нас</li>
                    <li className="menu__item">Услуги и тарифы</li>
                    <li className="menu__item">Готовые проекты</li>
                    <li className="menu__item">Контакты</li>
                    <li className="menu__item">Оставить заявку</li>
                </ul>
            </nav>
    )
}

export default Navbar;