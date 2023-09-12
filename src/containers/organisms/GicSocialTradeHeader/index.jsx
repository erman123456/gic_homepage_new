import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import MainButtonTransparent from '../../../components/atoms/MainButtonTransparent'
import MainContent from '../../../components/atoms/MainContent'
import MainTitle from '../../../components/atoms/MainTitle'
import TopestLayer from '../../../components/moleculs/TopestLayer'
import { DarkOne } from '../../../config/Design/Color'

const GicSocialTradeHeader = () => {
    const {t} = useTranslation()
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
    return (
        <>
        {inVideo && videoFrame()}
        <div className="w-100 mb-5" style={Object.assign({}, selfStyle.container)}>
            <div className="wrapper">
                <div className="row justify-content-center pt-2">
                    <div className="col-12 text-center mt-5">
                        <h1><MainTitle title={t("product.socialtrade-page.header.title")}/></h1>
                    </div>
                    <div className="col-12 col-lg-6 text-center mt-3">
                        <MainContent content={t("product.socialtrade-page.header.content")} style={{color:'#fff'}} />
                    </div>
                    <div className="col-12 col-lg-8 text-center mt-5">
                        <MainButtonTransparent onClick={() => {setInVideo("https://www.youtube.com/embed/N5WnQy3zmjU")}}  hover style={selfStyle.button} title={t("global.see-video")}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

const selfStyle = {
    container: {
        height:363,
        backgroundColor:DarkOne
    },
    button:{
        paddingLeft:80,
        paddingRight:80
    }
}

export default GicSocialTradeHeader
