import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import lancesoft from "../../img/lancesoft.png";
import lancesoft2 from "../../img/lancesoft2.png";
import lancesoft3 from "../../img/lancesoft3.png";
import lancesoft4 from "../../img/lancesoft4.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>LESM</span>
      <spane>
        •LESM refers to a type of software that Lancesoft uses to manage
        employee hiring, deployment and client tenure activities such as
        expenses, salaries and profit/loss calculations.
        <br />• LESM is an employee tracker that tracks all information like
        employee joining date, date of joining to a client, salary and client
        billing etc.
        <br /> • LESM provides details of all the employees in hierarchical
        drill down tree model starting from managing director to a trainee
        <br /> Ex:- A manager can see team leads working with him and can drill
        down to see consultants
        <br /> • LESM gives the report of profit/loss at each hierarchical level
        Ex:- Overall profit of a General Manager and team-wise profit /loss
      </spane>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={lancesoft} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={lancesoft2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={lancesoft3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={lancesoft4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
