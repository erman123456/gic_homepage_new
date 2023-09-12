import React, { useState } from 'react'
import BlogThumbnail from '../../../components/moleculs/BlogThumbnail'
import TopestLayer from '../../../components/moleculs/TopestLayer'

const BlogSection = (props) => {
    const {data} = props
    const [inVideo,setInVideo] = useState(false)
    const videoFrame = () => {
        return (
            <TopestLayer onClick={() => {setInVideo(false)}} >
                <div className="w-100 mt-5">
                    <div className="wrapper">
                        <div className="row pt-5">
                            <div className="col-12">
                                <iframe width="100%" height="700" src={inVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </TopestLayer>
        )
    }
    const link = [
        'S2wT5bxSJQg',
        'uW_IcSj0BwU'
    ]
    return (
        <>
            {inVideo && videoFrame()}
            <div className="w-100 mb-5">
                <div className="wrapper">
                    <div className="row justify-content-lg-between">
                        {
                            data &&
                            data.map((item,index) => {
                                return (
                                    <div key={index} className="col-12 col-lg-6  pr-lg-5">
                                        <BlogThumbnail onClick={() => {setInVideo("https://www.youtube.com/embed/"+link[index])}} image={item.image} video titleHighlight={item.titleHighlight} titleDark={item.titleDark} content={item.content}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogSection
