import React from 'react'
import { useTranslation } from 'react-i18next'
import MainContent from '../../../components/atoms/MainContent'
import MainTitle from '../../../components/atoms/MainTitle'
import formal from '../../../assets/images/formal-gictradepage.png'

const TheBenefit = () => {
    const {t} = useTranslation()
    return (
        <div className="w-100 position-relative">
            <div className="wrapper">
                <div className="row pt-5 pb-5">
                    <div className="col-12 col-lg-5">
                        <MainTitle title={t("product.gictrade-page-version2.the-benefit.title")} />
                        <div className="col p-0 mt-3">
                            <MainContent content={t("product.gictrade-page-version2.the-benefit.content")}  />
                        </div>
                        <div className="col p-0 mt-3">
                            <MainContent content={t("product.gictrade-page-version2.the-benefit.item1")}  /> <br />
                            <MainContent content={t("product.gictrade-page-version2.the-benefit.item2")}  /> <br />
                            <MainContent content={t("product.gictrade-page-version2.the-benefit.item3")}  /> <br />
                            <MainContent content={t("product.gictrade-page-version2.the-benefit.item4")}  />
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-none d-lg-block" style={selfStyle.boxImage}>
                <img src={formal} alt="FORMAL" style={{width:'100%', height:'100%'}} />
            </div>
        </div>
    )
}

const selfStyle = {
    boxImage:{
        width:'40%',
        height:'100%',
        background:'red',
        position:'absolute',
        top:0,
        right:0
    }
}

export default TheBenefit
