import React from 'react';
import Slider from "react-slick";
import './BannerSlider.css';

const BannerSlider = (props) => {
    const {data} = props
    const settings = {
        dots:true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "450px",
        slidesToShow: 1,
        arrows:false,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 4000,
        focusOnSelect: true,
        // swipeToSlide: true,
        // afterChange: function(e) {
           
        // },
        swipe:false,
        responsive: [
            {
              breakpoint: 1566,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                centerMode:true,
                centerPadding: "250px",
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                centerMode:false,
              }
            },
        ]
      };
    return (
        <>
            <Slider {...settings}>
                {data && data.map((item,index) => {
                    return (
                        <div key={index}>
                            <div className="sliderBox" onClick={() => {window.open(item.url, '_blank')}}  style={Object.assign({}, selfStyle.sliderBox)}>
                                <img src={item.gambar} alt="BANNER" style={selfStyle.imageBanner}/>
                            </div>
                        </div>
                    )
                })}
                               
            </Slider>
        </>
    )
}


const selfStyle = {
    sliderBox : {
        color:'#fff',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        backgroundColor:'transparent',
        overflow:'hidden',
        padding:10,
        cursor:'pointer'
    },
    imageBanner:{
        width:'100%',
        height:'100%',
        borderRadius:20
    }
}

export default BannerSlider
