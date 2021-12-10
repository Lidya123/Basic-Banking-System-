import React from "react";
import './Sliders.css';
import slide1 from '../SliderImages/slider1.jpg'
import slide2 from '../SliderImages/slider2.png'
import slide3 from '../SliderImages/slider3.jfif'
import slide4 from '../SliderImages/slider4.jpg'
import {GrNext, GrPrevious} from 'react-icons/gr'
import { useHistory } from 'react-router-dom'

const Sliders = () => {
  let history = useHistory();
  return (
    <div className="slider-detail">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0"class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>

        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={slide1}
              class="d-block w-100"
              alt="First slide"
            />
            <div className="carousel-caption d-none d-md-block">
              
              <p className="animated bounceInLeft" >  
              This is a simple credit management 
              system given in sparks foundation internship program. 
              There are dummy users which are used to transfer
              credits between them and show the transaction history 
              between the users.  
              
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={slide2}
              alt="Second slide"
            />
            <div className="carousel-caption vdg-cur d-none d-md-block">
              <p className="animated bounceInLeft">
              </p>
              <div className="row vbh">
              <button className="btn" 
              onClick={()=> {
                history.push("/components/AddCustomers");
                }}>
              Add Customers</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100" src={slide3}
              alt="Third slide"
            />
            <div className="carousel-caption vdg-cur d-none d-md-block">
            
              <p className="animated bounceInLeft">
              </p>

              <div className="row vbh">
              <button className="btn"
              onClick={()=> {
                history.push("/components/ViewCustomers");
                }}>
              View Customers</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100" src={slide4}
              alt="Forth slide"
            />
            <div className="carousel-caption vdg-cur d-none d-md-block">
            
              <p className="animated bounceInLeft">
              </p>

              <div className="row vbh">
              <button className="btn"
              onClick={()=> {
                history.push("/components/TransHistory");
                }}>
              View Transaction History</button>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span 
          // className="carousel-control-prev-icon" 
          aria-hidden="true"></span>
          <span className="sr-only"><GrPrevious/></span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span 
          // className="carousel-control-next-icon" 
          aria-hidden="true"></span>
          <span className="sr-only"><GrNext/></span>
        </a>
      </div>
    </div>
  );
};

export default Sliders;
