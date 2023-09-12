import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import socialtradeBrokerLimit from '../../../assets/images/socialtrade-brokerlimit.png'
import socialtradeCrossPlarform from '../../../assets/images/socialtrade-crossplatform.png'
import socialtradeNoLimit from '../../../assets/images/socialtrade-nolimit.png'
import socialtradeSupport from '../../../assets/images/socialtrade-support.png'
import ListBox from '../../../components/atoms/ListBox'
import SectionTitle from '../../../components/atoms/SectionTitle'
import { MainColor } from '../../../config/Design/Color'




const SocialTradeBenefits = () => {
    const  {t} = useTranslation()
    const [activeMenu, setActiveMenu] = useState("SWAP FREE")

    const componentBeRendered = () => {
        var image = socialtradeBrokerLimit
        var highLight = "SWAP"
        var text = "FREE"

        if(activeMenu === "SECURE"){
            image = socialtradeCrossPlarform
            highLight = "SECURE "
            text = " & TRANSPARANCY"
        }
        if(activeMenu === "COMMISSION"){
            image = socialtradeNoLimit
            highLight = "COMMISSION"
            text = "FREE"
        }
        if(activeMenu === "SPREAD"){
            image = socialtradeSupport
            highLight = "LOW"
            text = "SPREAD"
        }

        return (
            <>
                <img src={image} alt={`${highLight} ${text}`} /> <br />
                <div className="col pt-4 m-auto" style={{width:'65%'}}>
                    {/* <span style={{fontSize:20, fontWeight:600, fontFamily:Roboto}}>{highLight}</span>
                    <span>  </span>
                    <span style={{fontSize:20, fontWeight:300, fontFamily:Lato}}>{text}</span> */}
                </div>
            </>
        )
    }

    return (
        <div className="w-100 mb-5">
            <div className="wrapper pb-5 pt-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <SectionTitle title={t("product.gictrade-page.gictrade-benfits.title1")}/>
                    </div>
                </div>
                <div className="row mt-0 mt-lg-5 justify-content-center">
                    {/* <div className="col-12 col-lg-4 p-0 text-center text-lg-left">
                        <MainTitle title={t("product.gictrade-page.gictrade-benfits.subtitle1")}/>
                    </div>
                    <div className="col-4 d-none d-lg-block">
                    </div> */}
                    <div className="col-12 col-lg-4 mr-0 mr-lg-5">
                        {activeMenu === "SWAP FREE" &&
                            <div className="col d-block d-lg-none  text-center pt-4">
                                {componentBeRendered()}
                            </div>
                        }                        
                        <div className="col p-0 mt-3">
                            <ListBox pointer onClick={() => {setActiveMenu("SWAP FREE")}} style={activeMenu === "SWAP FREE" && {backgroundColor:MainColor, color:'#fff'}} title={t("product.socialtrade-page.socialtrade-benefits.item1")} />
                        </div>

                        {activeMenu === "SECURE" &&
                            <div className="col d-block d-lg-none  text-center pt-4">
                                {componentBeRendered()}
                            </div>
                        }  
                        <div className="col p-0 mt-3">
                            <ListBox pointer onClick={() => {setActiveMenu("SECURE")}} style={activeMenu === "SECURE" && {backgroundColor:MainColor, color:'#fff'}} title={t("product.socialtrade-page.socialtrade-benefits.item2")} />
                        </div>

                        {activeMenu === "COMMISSION" &&
                            <div className="col d-block d-lg-none  text-center pt-4">
                                {componentBeRendered()}
                            </div>
                        }
                        <div className="col p-0 mt-3">
                            <ListBox pointer onClick={() => {setActiveMenu("COMMISSION")}} style={activeMenu === "COMMISSION" && {backgroundColor:MainColor, color:'#fff'}} title={t("product.socialtrade-page.socialtrade-benefits.item3")} />
                        </div>

                        {activeMenu === "SPREAD" &&
                            <div className="col d-block d-lg-none  text-center pt-4">
                                {componentBeRendered()}
                            </div>
                        }
                        <div className="col p-0 mt-3">
                            <ListBox pointer onClick={() => {setActiveMenu("SPREAD")}} style={activeMenu === "SPREAD" && {backgroundColor:MainColor, color:'#fff'}} title={t("product.socialtrade-page.socialtrade-benefits.item4")} />
                        </div>
                    </div>
                    <div className="col-4 d-none d-lg-block text-center pt-4">
                        {componentBeRendered()}
                    </div>
                </div>


                
            </div>
        </div>
    )
}

export default SocialTradeBenefits
