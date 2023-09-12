import React from 'react'
import { useTranslation } from 'react-i18next'
import firstimage from '../../../assets/images/firstimage-newgictrade.png'
import secondimage from '../../../assets/images/secondimage-newgictrade.png'
import MainButton from '../../../components/atoms/MainButton'
import MainContent from '../../../components/atoms/MainContent'
import MainTitle from '../../../components/atoms/MainTitle'
import { DarkOne } from '../../../config/Design/Color'

const GicTradeGreeting = () => {
    const {t} = useTranslation()
    return (
        <>
        <div className="w-100 mb-5 position-relative">
            <div className="wrapper">
                <div className="row mt-5">
                    <div className="col-12 col-lg-6 text-center text-lg-left">
                        <MainTitle title="GIC Trade"/> <MainTitle style={{color:DarkOne}} title={t("product.gictrade-page-version2.header.title")} />
                        <div className="col p-0 mt-4 text-center text-lg-left">
                            <MainContent content={t("product.gictrade-page-version2.header.content")} />
                        </div>
                        <div className="col p-0 mt-4 text-center text-lg-left">
                            <MainButton title={t("global.buy-gict")} style={{paddingLeft:60, paddingRight:60, paddingTop:10, paddingBottom:10}} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="boxImage d-none d-lg-block" style={selfStyle.boxImage}>
                <img src={firstimage} alt="PEER 2 PEER" style={selfStyle.image} />
            </div>
        </div>
        <div className="w-100 pt-5 mb-5">
            <div className="wrapper mt-lg-5">
                <div className="row">
                    <div className="col-6 d-none d-lg-block text-center">
                        <img src={secondimage} alt="BRAND AMBASADOR"/>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="row mt-lg-5">
                            <div className="col-12 text-center text-lg-left">
                                <MainTitle title={t("product.gictrade-page-version2.header2.title")}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center text-lg-left col-lg-9 mt-4">
                                <MainContent content={t("product.gictrade-page-version2.header2.content")} /> <br />
                                <MainContent content={t("product.gictrade-page-version2.header2.item1")} /> <br />
                                <MainContent content={t("product.gictrade-page-version2.header2.item2")} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

const selfStyle = {
    boxImage : {
        width:'40%',
        height:'100%',
        position:'absolute',
        background:'transparent',
        top:0,
        right:0
    },
    image : {
        width:'100%',
        height:'130%',
        resizeMode:'contain'
    }
}

export default GicTradeGreeting
