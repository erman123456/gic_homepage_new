import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from "react-slick";
import arrowLeft from '../../../assets/images/icon/arrow-left.png';
import arrowRight from '../../../assets/images/icon/arrow-right.png';
import SelectionTitle from '../../../components/atoms/SectionTitle';
import { APIGET } from '../../../config/Axios';
import './MediaPartner.css';



function ArrowRight(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={`${className} mt-2 text-center`}
        style={{ ...style, display: "block", width:70, height:70 }}
        onClick={onClick}
        >
         <img onClick={onClick} src={ arrowRight} style={{width:35, height:35}} alt="ARROW" className="mt-lg-2 ml-3 d-block" />
        </div>
    );
}
function ArrowLeft(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={`${className} mt-1 ml-3 ml-lg-0`}
        style={{ ...style, display: "block", width:70, height:70, position:'absolute', zIndex:9, }}
        onClick={onClick}
        >
         <img onClick={onClick} src={ arrowLeft } alt="ARROW" style={{width:30, height:30}} className="mt-2 ml-2 ml-lg-4 d-block" />
        </div>
    );
}

const MediaPartner = () => {
    const {t} = useTranslation()
    const [data,setData] = useState()


    
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        rows: 2,
        slidesPerRow: 2,
        arrows:true,
        nextArrow: <ArrowRight />,
        prevArrow: <ArrowLeft />,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        responsive: [
                {
                    breakpoint: 1566,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                        prevArrow: <ArrowLeft />,
                    }
                },
            ]
      };

      const getData = async () => {
        let request = await APIGET('/mitra')
        setData(request.data.data)
      }


      useEffect( () => {
        getData()
      },[])
    return (
        <div className="w-100 mt-5 mb-5">
            <div className="wrapper" style={{overflow:'hidden'}}>
                <div className="row">
                    <div className="col-12 text-center">
                        <SelectionTitle title={t("home-page.media-partner.title")}/>
                    </div>
                    <div className="col-12 ">
                        {!data
                        ?
                        <p>Loading ...</p>
                        :
                            <Slider {...settings}>
                                
                                {data.map((item,index) => {
                                    return (
                                        <div key={index}>
                                            <div className="w-100 mt-5 text-center" style={{height:50, lineHeight:50, alignItem:'center', alignContent:'center'}}>
                                                <img className="m-auto" src={item.gambar} alt="kumparan1" />
                                            </div>
                                        </div>
                                    )
                                })}
                                
                            </Slider>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MediaPartner
