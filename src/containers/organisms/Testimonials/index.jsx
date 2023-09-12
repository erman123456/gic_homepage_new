import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import SelectionTitle from '../../../components/atoms/SectionTitle';
import TestimonialCard from '../../../components/moleculs/TestimonialCard'
import { APIGET } from '../../../config/Axios';

const Testimonials = () => {
    const [data,setData] = useState()
    const settings = {
        dots:true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "450px",
        slidesToShow: 1,
        speed: 500,
        arrows:false,
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


      const getData = async () => {
          let request = await APIGET('/testimoni')
          if(request.status === 200){
              setData(request.data.data)
          }
      }

      useEffect( () => {
        getData()
      }, [])
    return (
        <div className="w-100 bg-light mb-lg-0 mt-5 pt-5" style={{minHeight:1000}}>
            <div className="wrapper mb-5 mt-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <SelectionTitle title="Testimonial" />
                    </div>
                </div>
                {!data
                ?
                    <p>Loading ...</p>
                :
                    <Slider {...settings}>
                        {data.map((item,index)=> {
                            return(
                                <div key={index} className="p-4">
                                    <TestimonialCard data={item} />
                                </div>
                            )
                        })}
                    </Slider>
                }
                
            </div>
        </div>
    )
}

export default Testimonials
