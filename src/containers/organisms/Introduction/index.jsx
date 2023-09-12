import React from 'react'
import ActionForwarder from '../../../components/atoms/ActionForwarder'
import CardVideo from '../../../components/atoms/CardVideo'
import { DarkFour, DarkOne } from '../../../config/Design/Color'
import { Lato } from '../../../config/Design/Fonts'
import { useTranslation } from 'react-i18next';
import SelectionTitle from '../../../components/atoms/SectionTitle'
import ThumbnailVideo from '../../../assets/images/video-thumbnail-home.png'
import TopestLayer from '../../../components/moleculs/TopestLayer'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Introduction = (props) => {
    const [inVideo,setInVideo] = useState(false)
    const {t} = useTranslation()
    const history = useHistory()
    const {style} = props
    const videoFrame = () => {
        return (
            <TopestLayer onClick={() => {setInVideo(false)}} >
                <div className="w-100 mt-5">
                    <div className="wrapper">
                        <div className="row pt-5">
                            <div className="col-12">
                                <iframe width="100%" height="700" src="https://www.youtube.com/embed/62waXBFOvlI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
            <div className="wrapper" style={style}>
                <div className="row">
                    <div className="col-md-12 col-lg-6 pl-lg-5 pr-lg-5">
                        <CardVideo onClick={() => {setInVideo(true)}} image={ThumbnailVideo}/>
                    </div>
                    <div className="col-md-12 col-lg-6 pt-5">
                        <div className="col text-center text-lg-left" style={selfStyle.title}>
                            <SelectionTitle title={t('home-page.introduction.title')}/>
                        </div>
                        <div className="col text-center text-lg-left" style={selfStyle.content}>
                            {t('home-page.introduction.content')}
                        </div>
                        <div className="col text-center text-lg-left mt-3">
                            <ActionForwarder onClick={() => {history.push('/products/gic-trade')}} text={t("global.learn-more")} style={{fontSize:24}}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const selfStyle = {
    title : {
        fontSize:36,
        fontFamily: Lato,
        fontWeight:600,
        color:DarkOne
    },
    content : {
        fontSize:20,
        fontFamily: Lato,
        fontWeight:600,
        color:DarkFour
    },
}

export default Introduction
