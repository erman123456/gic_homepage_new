import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import gictradeFreeCommission from '../../../assets/images/gictrade-freecommission.png'
import gictradeFreeSwap from '../../../assets/images/gictrade-freeswap.png'
import gictradeLowSpread from '../../../assets/images/gictrade-lowspread.png'
import gictradeTransparent from '../../../assets/images/gictrade-transparent.png'
import gictradeEasy from '../../../assets/images/gictrade-easy.png'
import gictradeFullControl from '../../../assets/images/gictrade-fullcontrol.png'
import gictradeMinimum from '../../../assets/images/gictrade-minimum.png'
import gictradeInstant from '../../../assets/images/gictrade-instant.png'

import ListBox from '../../../components/atoms/ListBox'
import MainTitle from '../../../components/atoms/MainTitle'
import SectionTitle from '../../../components/atoms/SectionTitle'
import { MainColor } from '../../../config/Design/Color'

const GicTradeBenefits = () => {
    const  {t} = useTranslation()
    const [activeMenu, setActiveMenu] = useState("SWAP FREE")
    const [activeMenu2, setActiveMenu2] = useState("SWAP FREE")

    const componentBeRendered = () => {
        var image = gictradeFreeCommission
        var highLight = "SWAP"
        var text = "FREE"

        if(activeMenu === "SECURE"){
            image = gictradeFreeSwap
            highLight = "SECURE "
            text = " & TRANSPARANCY"
        }
        if(activeMenu === "COMMISSION"){
            image = gictradeLowSpread
            highLight = "COMMISSION"
            text = "FREE"
        }
        if(activeMenu === "SPREAD"){
            image = gictradeTransparent
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
    const componentBeRendered2 = () => {
        var image = gictradeEasy
        var highLight = "SWAP"
        var text = "FREE"

        if(activeMenu2 === "SECURE"){
            image = gictradeFullControl
            highLight = "SECURE "
            text = " & TRANSPARANCY"
        }
        if(activeMenu2 === "COMMISSION"){
            image = gictradeMinimum
            highLight = "COMMISSION"
            text = "FREE"
        }
        if(activeMenu2 === "SPREAD"){
            image = gictradeInstant
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
                    <div className="col-12 col-lg-4 p-0 text-center text-lg-left">
                        <MainTitle title={t("product.gictrade-page.gictrade-benfits.subtitle1")}/>
                    </div>
                    <div className="col-4 d-none d-lg-block">
                    </div>
                    <div className="col-12 col-lg-4 mr-0 mr-lg-5">
                        {activeMenu === "SWAP FREE" &&
                            <div className="col d-block d-lg-none  text-center pt-4">
                                {componentBeRendered()}
                            </div>
                        }                        
                        <div className="col p-0 mt-3">
                            <ListBox pointer onClick={() => {setActiveMenu("SWAP FREE")}} style={activeMenu === "SWAP FREE" && {backgroundColor:MainColor, color:'#fff'}} title={t("product.gictrade-page.gictrade-benfits.item1-1")} />
                        </div>

                        {activeMenu === "SECURE" &&
                            <div className="col d-block d-lg-none  text-center pt-4">
                                {componentBeRendered()}
                            </div>
                        }  
                        <div className="col p-0 mt-3">
                            <ListBox pointer onClick={() => {setActiveMenu("SECURE")}} style={activeMenu === "SECURE" && {backgroundColor:MainColor, color:'#fff'}} title={t("product.gictrade-page.gictrade-benfits.item1-2")} />
                        </div>

                        {activeMenu === "COMMISSION" &&
                            <div className="col d-block d-lg-none  text-center pt-4">
                                {componentBeRendered()}
                            </div>
                        }
                        <div className="col p-0 mt-3">
                            <ListBox pointer onClick={() => {setActiveMenu("COMMISSION")}} style={activeMenu === "COMMISSION" && {backgroundColor:MainColor, color:'#fff'}} title={t("product.gictrade-page.gictrade-benfits.item1-3")} />
                        </div>

                        {activeMenu === "SPREAD" &&
                            <div className="col d-block d-lg-none  text-center pt-4">
                                {componentBeRendered()}
                            </div>
                        }
                        <div className="col p-0 mt-3">
                            <ListBox pointer onClick={() => {setActiveMenu("SPREAD")}} style={activeMenu === "SPREAD" && {backgroundColor:MainColor, color:'#fff'}} title={t("product.gictrade-page.gictrade-benfits.item1-4")} />
                        </div>
                    </div>
                    <div className="col-4 d-none d-lg-block text-center pt-4">
                        {componentBeRendered()}
                    </div>
                </div>


                <div className="row mt-5 mt-lg-5 justify-content-center">
                    <div className="col-6 d-none d-lg-block">
                    </div>
                    <div className="col-12 col-lg-6 pl-0 pl-lg-5 p-0 text-center text-lg-left">
                        <MainTitle title={t("product.gictrade-page.gictrade-benfits.subtitle2")}/>
                    </div>
                    <div className="col-12 d-none d-lg-block col-lg-4 text-center pt-4">
                        {componentBeRendered2()}
                    </div>
                    <div className="col-12 col-lg-4 mr-0 ml-lg-5">
                        {activeMenu2 === "SWAP FREE" &&
                            <div className="col d-block d-lg-none  text-center pt-4">
                                {componentBeRendered()}
                            </div>
                        }  
                        <div className="col p-0 mt-3">
                            <ListBox pointer onClick={() => {setActiveMenu2("SWAP FREE")}} style={activeMenu2 === "SWAP FREE" && {backgroundColor:MainColor, color:'#fff'}} title={t("product.gictrade-page.gictrade-benfits.item2-1")} />
                        </div>

                        {activeMenu2 === "SECURE" &&
                            <div className="col d-block d-lg-none  text-center pt-4">
                                {componentBeRendered()}
                            </div>
                        }  
                        <div className="col p-0 mt-3">
                            <ListBox pointer onClick={() => {setActiveMenu2("SECURE")}} style={activeMenu2 === "SECURE" && {backgroundColor:MainColor, color:'#fff'}} title={t("product.gictrade-page.gictrade-benfits.item2-2")} />
                        </div>

                        {activeMenu2 === "COMMISSION" &&
                            <div className="col d-block d-lg-none  text-center pt-4">
                                {componentBeRendered()}
                            </div>
                        }
                        <div className="col p-0 mt-3">
                            <ListBox pointer onClick={() => {setActiveMenu2("COMMISSION")}} style={activeMenu2 === "COMMISSION" && {backgroundColor:MainColor, color:'#fff'}} title={t("product.gictrade-page.gictrade-benfits.item2-3")} />
                        </div>

                        {activeMenu2 === "SPREAD" &&
                            <div className="col d-block d-lg-none  text-center pt-4">
                                {componentBeRendered()}
                            </div>
                        }
                        <div className="col p-0 mt-3">
                            <ListBox pointer onClick={() => {setActiveMenu2("SPREAD")}} style={activeMenu2 === "SPREAD" && {backgroundColor:MainColor, color:'#fff'}} title={t("product.gictrade-page.gictrade-benfits.item2-4")} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GicTradeBenefits
