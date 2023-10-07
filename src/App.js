import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img from "./img/img.jpg";
import facebook from "./img/facebook.svg";
import instagram from "./img/instagram.svg";

export default function App() {
  return (
    <div className="wrapper">
      <nav>
        <div className="container">
          <div className="nav_inner">
            <div className="nav_logo">
              <img src={img} alt="logo" className="nav_logo" />
            </div>
            <ul>
              <li>
                <a href="/">Контакты</a>
              </li>
              <li>
                <a href="/">О нас</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="slider">
        <div className="container">
          <div className="slider_inner">
            <Carousel>
              <div>
                <img
                  src="https://knews.kg/wp-content/uploads/2016/03/yurty.jpg"
                  alt="Пейзаж"
                />
                <p className="legend">Жемчужина Кыргызстана</p>
              </div>
              <div>
                <img
                  src="https://pibig.info/uploads/posts/2021-05/1621922297_12-pibig_info-p-gornii-kirgizstan-priroda-krasivo-foto-12.jpg"
                  alt="Пейзаж"
                />
                <p className="legend">Горный Кыргызстан</p>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="footer_inner">
            <div className="social_media">
              <h3>Мы в соц.сетях</h3>
              <ul>
                <li>
                  <a href="/">
                    <img src={facebook} alt="facebook" />
                    geeks
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={instagram} alt="insta" />
                    geeks
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
