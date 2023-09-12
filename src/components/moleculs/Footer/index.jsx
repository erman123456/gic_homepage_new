import React from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import AppStore from '../../../assets/images/appstore.png'
import facebook from '../../../assets/images/facebook-footer.png'
import instagram from '../../../assets/images/instagram-footer.png'
import linkedin from '../../../assets/images/linkedin-footer.png'
import Logo from '../../../assets/images/logo-white.png'
import PlayStore from '../../../assets/images/playstore.png'
import twitter from '../../../assets/images/twitter-footer.png'
import youtube from '../../../assets/images/youtube-footer.png'
import { DarkOne } from '../../../config/Design/Color'
import { Roboto } from '../../../config/Design/Fonts'

const Footer = () => {
    const {t} = useTranslation()
    const history = useHistory()
    return (
        <div className="w-100 pt-3" style={selfStyle.container}>
            <div className="wrapper  mt-5" style={selfStyle.contentContainer}>
                <div className="row p-2">
                    <div className="col-md-12 col-lg-5">
                        <img src={Logo} alt="Logo" style={selfStyle.logo} /> <br />
                        <div className="mt-4" >
                            <span style={selfStyle.contentText}>
                                {t("footer.title")}
                            </span>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-7  mt-lg-0 mt-5">
                        <div className="row">
                            <div className="col-12 col-lg-4">
                                <span style={selfStyle.title}>{t("footer.contact")}</span>

                                <div className="row">
                                    <div className="mt-3 col-6 col-lg-12">
                                        <span style={selfStyle.contentText}>
                                            Centennial Tower Level 29, Jl. Jend Gatot Suboto, Jakarta.
                                        </span>
                                    </div>
                                    <div className="mt-3 col-6 col-lg-12">
                                        <span style={selfStyle.contentText}>
                                            Email : <span style={{color:'#E0E0E0'}}>support@gictrade.io</span> <br />
                                            Call Center : <span style={{color:'#E0E0E0'}}>0817-0095-888</span> <br />
                                            Monday - Friday
                                            (09.00 - 17.00)
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 mt-lg-0 mt-4 col-lg-4">
                                <span style={selfStyle.title}>{t("footer.support")}</span>

                                <div className="mt-3">
                                    <span onClick={() => {history.push('/under-develop')}} style={selfStyle.contentText}>
                                        Jurnal
                                    </span>
                                </div>
                                <div className="mt-2">
                                    <span onClick={() => {history.push('/support/terms-condition')}} style={selfStyle.contentText}>
                                        Term & Condition
                                    </span>
                                </div>
                                <div className="mt-2">
                                    <span onClick={() => {history.push('/support/privacy-police')}} style={selfStyle.contentText}>
                                        Privacy Police
                                    </span>
                                </div>
                                <div className="mt-2">
                                    <span onClick={() => {history.push('/support/career')}} style={selfStyle.contentText}>
                                        Career
                                    </span>
                                </div>
                                <div className="mt-2">
                                    <span onClick={() => {history.push('/support/faq')}} style={selfStyle.contentText}>
                                        Frequently Asked Questions
                                    </span>
                                </div>
                            </div>


                            <div className="col-6 mt-lg-0 mt-4 col-lg-4">
                                <span style={selfStyle.title}>{t("footer.install")}</span>

                                <div className="mt-4">
                                    <a href="https://play.google.com" rel="nofollow" target="_blank">
                                        <img style={{cursor:'pointer'}} src={PlayStore} alt="PlayStore" />
                                    </a>
                                </div>
                                <div className="mt-3">
                                    <a href="https://play.google.com" rel="nofollow" target="_blank">
                                        <img style={{cursor:'pointer'}} src={AppStore} alt="PlayStore" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-100 d-none d-lg-block" style={selfStyle.divider}></div>

                <div className="row pt-3 pb-3">
                    <div className="col-12 d-none d-lg-block col-lg-6">
                        <span style={selfStyle.copyRight}>© 2021 PT Global Investa Cakrawala. All rights reserved</span>
                    </div>
                    <div className="col-12 col-lg-6 text-center text-lg-right">
                        <a href="https://www.facebook.com/GICTradeID/" target="_blank" rel="noopener noreferrer" style={{marginRight:10}} ><img src={facebook} alt="FACEBOOK" /></a>
                        <a href="https://twitter.com/GICTradeIO/" target="_blank" rel="noopener noreferrer" style={{marginRight:10}} ><img src={twitter} alt="TWITTER" /></a>
                        <a href="https://www.linkedin.com/company/gictrade/" target="_blank" rel="noopener noreferrer" style={{marginRight:10}} ><img src={linkedin} alt="LINKEDIN" /></a>
                        <a href="https://www.instagram.com/gictrade" target="_blank" rel="noopener noreferrer" style={{marginRight:10}} ><img src={instagram} alt="INSTAGRAM" /></a>
                        <a href="https://www.youtube.com/channel/UCcKRjztrpbWbTBhduSyFnRA" target="_blank" rel="noopener noreferrer" ><img src={youtube} alt="YOUTUBE" /></a>
                    </div>
                    <div className="col-12 d-block d-lg-none text-center mt-4 col-lg-6">
                        <span style={selfStyle.copyRight}>© 2021 PT Global Investa Cakrawala. All rights reserved</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const selfStyle = {
    container : {
        backgroundColor:DarkOne,
        minHeight:397
    },
    contentContainer:{
        marginTop:56,
    },
    divider:{
        height:1,
        backgroundColor:'#fff',
        opacity:0.1,
        marginTop:80,
    },
    logo : {
        height: 52,
        width: 120
    },
    title : {
        color:'#E0E0E0',
        fontFamily:Roboto,
        fontWeight:500,
        fontSize:18
    },
    contentText : {
        color:'#BDBDBD',
        fontFamily:Roboto,
        fontWeight:400,
        fontSize:16,
        cursor:'pointer'
    },
    copyRight : {
        color:'#BDBDBD',
        fontFamily:Roboto,
        fontWeight:400,
        fontSize:16
    }
}

export default Footer
