import React from 'react';
import Portfolio from '../Portfolio';
import Div from '../Div';
import Slider from 'react-slick';

export default function PortfolioSlider({ data }) {
  /** Slider Settings **/
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          dots: true,
          adaptiveHeight: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          dots: true,
          adaptiveHeight: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          dots: true,
          adaptiveHeight: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          dots: true,
          adaptiveHeight: true
        }
      }
    ],
  };

  return (
    <Slider {...settings} className="cs-slider cs-style3 cs-gap-24">
      {data.map((item, index) => (
        <Div key={index} className="cs-portfolio_slider_item">
          <Portfolio
            title={item.title}
            subtitle={item.subtitle}
            href={item.href}
            src={item.src}
            showTitleOnMobile={true}
          />
        </Div>
      ))}
    </Slider>
  );
}
