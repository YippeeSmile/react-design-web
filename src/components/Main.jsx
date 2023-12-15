import React from 'react';
//import {Link} from 'react-router-dom';
import '../pages/index.scss';
import banner from '../images/main-banner.jpg';
import nevskiy from '../images/grid/nevskiy01.png';
import homecity from '../images/grid/homecity01.jpg';
import trend from '../images/grid/trend01.jpg';
import nevsky from '../images/grid/nevskiy01.png';
import unionPark from '../images/grid/unionpark01.jpg';
import vasil from '../images/grid/vasil01.jpg';
import versis from '../images/grid/versis01.jpg';
import baltiysky from '../images/grid/baltiysky01.png';
import wellton from '../images/grid/welton01.jpg';
import zilart from '../images/grid/zilart01.jpg';
import octpole from '../images/grid/oct-pole01.jpg';

function Main(props) {
  
    return (
      <main className="main">
            <section className="banner">
            <img src={banner} className="banner__image"  alt="дизайн пространства и квартир"/>
            <div className="banner__text-wrapper">
                <h1 className="banner__title">Дизайн домашнего пространства</h1>
                <h2 className="banner__subtitle"><a href="#projects">Наши проекты</a></h2>
            </div>
        </section>
        <section className="projects">
            <h3 className="projects__title" id="projects">Наши проекты</h3>
            <div className="projects__grid-container">
                <div className="projects__item big">
                    <img src={nevskiy} alt="ЖК Невский" />
                    <p className="projects__name">ЖК Невский</p>
                </div>
                <div className="projects__item">
                    <img src={homecity} className="projects__item" alt="ЖК Homecity" />
                        <p className="projects__name">ЖК Homecity</p>
                </div>
                <div className="projects__item">
                    <img src={trend} className="projects__item" alt="ЖК Trend" />
                    <p className="projects__name">ЖК Trend</p>
                </div>
                <div className="projects__item">
                    <img src={nevsky} className="projects__img" alt="ЖК Невский" />
                </div>
                <div className="projects__item tall">
                    <img src={unionPark} className="projects__img" alt="ЖК UnionPark" />
                    <p className="projects__name">ЖК UnionPark</p>
                </div>
                <div className="projects__item">
                    <img src={vasil} className="projects__img" alt="ул. Васильевская" />
                    <p className="projects__name">ул. Васильевская</p>
                </div>
                <div className="projects__item big">
                    <img src={versis} className="projects__img" alt="ЖК Versis" />
                    <p className="projects__name">ЖК Versis</p>
                </div>
                <div className="projects__item">
                    <img src={baltiysky} className="projects__img" alt="ЖК Балтийский" />
                    <p className="projects__name">ЖК Балтийский</p>
                </div>
                <div className="projects__item projects__item--7">
                    <img src={wellton} className="projects__img" alt="ЖК Welton" />
                    <p className="projects__name">ЖК Welton</p>
                </div>
                <div className="projects__item big">
                    <img src={zilart} className="projects__img" alt="ЖК ЗилАрт" />
                    <p className="projects__name">ЖК ЗилАрт</p>
                </div>
                <div className="projects__item">
                    <img src={trend} className="projects__item" alt="ЖК Trend" />
                    <p className="projects__name">ЖК Trend</p>
                </div>
                <div className="projects__item tall">
                    <img src={octpole} className="projects__img" alt="ЖК Октябрьское Поле" />
                    <p className="projects__name">ЖК Октябрьское Поле</p>
                </div>
                <div className="projects__item">
                    <img src={nevsky} className="projects__img" alt="ЖК Невский" />
                </div>

            </div>
        </section>
        </main>
    )
  }
  
  export default Main;