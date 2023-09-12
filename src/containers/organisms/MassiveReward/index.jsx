import React from 'react'
import { useTranslation } from 'react-i18next'
import AffiliateReward from '../../../assets/images/affiliate-reward.png'
import MainButtonTransparent from '../../../components/atoms/MainButtonTransparent'
import MainContent from '../../../components/atoms/MainContent'
import MainTitle from '../../../components/atoms/MainTitle'
import SectionTitle from '../../../components/atoms/SectionTitle'
import StepCircle from '../../../components/atoms/StepCircle'
import { DarkFour, MainColor } from '../../../config/Design/Color'
import { Lato } from '../../../config/Design/Fonts'


const MassiveReward = () => {
    const {t} = useTranslation()
    return (
        <div className="w-100 mb-5">
            <div className="wrapper">
                <div className="row">
                    <div className="col-12 text-center">
                        <MainTitle title={t("product.gicaffiliate-page.massive-reward.title")}/>
                    </div>
                </div>
                <div className="row justify-content-center mt-5">
                    <div className="col-12 col-lg-9">
                        <div className="row justify-content-center">
                            <div className="col-9 mt-3 mt-lg-0 col-lg-4 d-flex position-relative">
                                <StepCircle title="1"/>
                                <div style={selfStyle.boxStepText}>
                                    {t("product.gicaffiliate-page.massive-reward.item1")}
                                    <div style={selfStyle.borderBoxStepText}></div>
                                </div>
                                <div style={selfStyle.borderBoxStep} className="d-none d-lg-block"></div>
                            </div>
                            <div className="col-9 mt-3 mt-lg-0 col-lg-4 d-flex position-relative">
                                <StepCircle title="2"/>
                                <div style={selfStyle.boxStepText}>
                                    {t("product.gicaffiliate-page.massive-reward.item2")}
                                    <div style={selfStyle.borderBoxStepText}></div>
                                </div>
                                <div style={selfStyle.borderBoxStep} className="d-none d-lg-block"></div>
                            </div>
                            <div className="col-9 mt-3 mt-lg-0 col-lg-4 d-flex">
                                <StepCircle title="3"/>
                                <div style={selfStyle.boxStepText}>
                                    {t("product.gicaffiliate-page.massive-reward.item3")}
                                    <div style={selfStyle.borderBoxStepText}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 justify-content-center">
                    <div className="col-12 col-lg-9 text-center">
                        <img style={{width:'100%'}} src={AffiliateReward} alt="Affiliate Reward" />
                    </div>
                </div>
                <div className="row mt-5 justify-content-center">
                    <div className="col-12 mt-5 col-lg-9 ">
                        <div className="row">
                            <div className="col-12 text-center text-lg-left col-lg-6">
                                <SectionTitle style={{fontSize:24}} title={t("product.gicaffiliate-page.massive-reward.detail1.title")} />
                                <div className="col p-0 mt-3">
                                    <MainContent content={t("product.gicaffiliate-page.massive-reward.detail1.content")}/>
                                </div>
                                <div className="col p-0 mt-4">
                                    <MainButtonTransparent title="Download" style={{color:MainColor, paddingLeft:80, paddingRight:80}}/>
                                </div>
                            </div>
                            <div className="col-12 text-center text-lg-left mt-5 mt-lg-0 col-lg-6">
                                <SectionTitle style={{fontSize:24}} title={t("product.gicaffiliate-page.massive-reward.detail2.title")} />
                                <div className="col p-0 mt-3">
                                    <MainContent content={t("product.gicaffiliate-page.massive-reward.detail1.content")}/>
                                </div>
                                <div className="col p-0 mt-4">
                                    <MainButtonTransparent onClick={() =>{window.open('https://www.gicindonesia.com/jurnal/informasi/announcement/menjadi-introducing-brokers-di-gic/', '_blank').focus();}} title="Join GICAffiliate" style={{color:MainColor, paddingLeft:80, paddingRight:80}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const selfStyle = {
    boxStepText : {
        minWidth:100,
        height:40,
        position:'relative',
        marginLeft:10,
        fontFamily:Lato,
        fontSize:20,
        fontWeight:600,
        lineHeight:'40px'
    },
    borderBoxStepText:{
        position:'absolute',
        width:20,
        height:5,
        bottom:0,
        left:0,
        background:MainColor
    },
    borderBoxStep:{
        width:70,
        height:1,
        borderStyle:'dashed',
        borderWidth:2,
        borderColor:DarkFour,
        position:'absolute',
        right:0,
        top:20
    }
}

export default MassiveReward
