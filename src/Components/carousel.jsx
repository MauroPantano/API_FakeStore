import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ImgCarousel1 from '../img/carousel-1.jpg';
import ImgCarousel2 from '../img/carousel-2.jpg';
import ImgCarousel3 from '../img/carousel-3.jpg';
import '../App.css';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel className="custom-carousel">
                <div className='img-carousel1'>
                    <p className='img-carousel1-title'>Quality. Choice. Value.</p>
                    <img src={ImgCarousel1} />
                </div>
                <div>
                    <p className='img-carousel2-title'>Shop and save anywhere from 20-75% on your favorite products, now online!</p>
                    <img src={ImgCarousel2} />
                </div>
                <div>
                    <p className='img-carousel3-title'>Time For A Change</p>
                    <img src={ImgCarousel3} />
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel;