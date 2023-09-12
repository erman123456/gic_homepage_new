import React from 'react'
import { useTranslation } from 'react-i18next'
import MainButtonTransparent from '../../../components/atoms/MainButtonTransparent'
import MainContent from '../../../components/atoms/MainContent'
import MainTitle from '../../../components/atoms/MainTitle'
import { DarkOne } from '../../../config/Design/Color'

const GicFeatureHeader = () => {
    const {t} = useTranslation()
    return (
        <div className="w-100 mb-5" style={Object.assign({}, selfStyle.container)}>
            <div className="wrapper">
                <div className="row justify-content-center pt-2">
                    <div className="col-12 text-center mt-5">
                        <h1><MainTitle title={t("product.gictrade-page.header.title")}/></h1>
                    </div>
                    <div className="col-12 col-lg-6 text-center mt-3">
                        <MainContent content={t("product.gictrade-page.header.content")} style={{color:'#fff'}} />
                    </div>
                    <div className="col-12 col-lg-8 text-center mt-5">
                        <MainButtonTransparent hover style={selfStyle.button} title={t("global.see-video")}/>
                    </div>
                </div>
            </div>
        </div>
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

export default GicFeatureHeader
