import React from 'react';
import '../../pages/index.scss';

import foto1 from "../../images/hp/homecity/hp-homecity-01.jpg";
import foto2 from "../../images/hp/homecity/hp-homecity-02.jpg";
import foto3 from "../../images/hp/homecity/hp-homecity-03.jpg";
import foto4 from "../../images/hp/homecity/hp-homecity-04.jpg";
import foto5 from "../../images/hp/homecity/hp-homecity-05.jpg";
import foto6 from "../../images/hp/homecity/hp-homecity-06.jpg";
import foto7 from "../../images/hp/homecity/hp-homecity-07.jpg";
import foto8 from "../../images/hp/homecity/hp-homecity-08.jpg";
import foto9 from "../../images/hp/homecity/hp-homecity-09.jpg";
import foto10 from "../../images/hp/homecity/hp-homecity-10.jpg";
import foto11 from "../../images/hp/homecity/hp-homecity-11.jpg";
import foto12 from "../../images/hp/homecity/hp-homecity-12.jpg";
import foto13 from "../../images/hp/homecity/hp-homecity-13.jpg";

function Homecity(props) {
  
    return (
        <section class="projects">
        <h3 class="projects__title">ЖК Homecity</h3>
        <div class="projects__grid-container">
            <div class="projects__item big">
                <img src={foto1} class="projects__img" alt="" />
            </div>
            <div class="projects__item">
                <img src={foto2} class="projects__img" alt="" />
            </div>
            <div class="projects__item">
                <img src={foto3} class="projects__img" alt="" />
            </div>
            <div class="projects__item">
                <img src={foto4} class="projects__img" alt="" />
            </div>
            <div class="projects__item tall">
                <img src={foto5} class="projects__img" alt="" />
            </div>
            <div class="projects__item">
                <img src={foto6} class="projects__img" alt="" />
            </div>
            <div class="projects__item big">
                <img src={foto7} class="projects__img" alt="" />
            </div>
            <div class="projects__item">
                <img src={foto8} class="projects__img" alt="" />
            </div>
            <div class="projects__item">
                <img src={foto9} class="projects__img" alt="" />
            </div>
            <div class="projects__item big">
                <img src={foto10} class="projects__img" alt="" />
            </div>
            <div class="projects__item">
                <img src={foto11} class="projects__img" alt="" />
            </div>
            <div class="projects__item">
                <img src={foto12} class="projects__img" alt="" />
            </div>
            <div class="projects__item big">
                <img src={foto13} class="projects__img" alt="" />
            </div>
        </div>
    </section>
    )
  }
  
  export default Homecity;