import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import commission from '../../../assets/images/commission.png'
import lowspread from '../../../assets/images/lowspread.png'
import SecureBenefit from '../../../assets/images/securebenefit.png'
import SwapFree from '../../../assets/images/swapfree.png'
import ListBox from '../../../components/atoms/ListBox'
import SectionTitle from '../../../components/atoms/SectionTitle'
import { MainColor } from '../../../config/Design/Color'

const GictCoinBenefits = () => {
    const  {t} = useTranslation()
    const [activeMenu, setActiveMenu] = useState("SWAP FREE")

    const componentBeRendered = () => {
        var image = SwapFree
        var highLight = "SWAP"
        var text = "FREE"

        if(activeMenu === "SECURE"){
            image = SecureBenefit
            highLight = "SECURE "
            text = " & TRANSPARANCY"
        }
        if(activeMenu === "COMMISSION"){
            image = commission
            highLight = "COMMISSION"
            text = "FREE"
        }
        if(activeMenu === "SPREAD"){
            image = lowspread
            highLight = "LOW"
            text = "SPREAD"
        }

        return (
            <>
                <img src={image} alt={`${highLight} ${text}`} /> <br />
                {/* <div className="col pt-4 m-auto" style={{width:'65%'}}>
                    <span style={{fontSize:20, fontWeight:600, fontFamily:Roboto}}>{highLight}</span>
                    <span>  </span>
                    <span style={{fontSize:20, fontWeight:300, fontFamily:Lato}}>{text}</span>
                </div> */}
            </>
        )
    }

    return (
        <div className="w-100 mb-5">
            <div className="wrapper pt-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <SectionTitle title={t("introduction.gictcoin-page.coin-benefits.title")}/>
                    </div>
                </div>
                <div className="row mt-5 justify-content-center">
                    <div className="col-12 col-lg-4 mr-0 mr-lg-5">
                        <div className="col p-0 mt-3">
                            <ListBox pointer onClick={() => {setActiveMenu("SWAP FREE")}} style={activeMenu === "SWAP FREE" && {backgroundColor:MainColor, color:'#fff'}} title={t("introduction.gictcoin-page.coin-benefits.item1")} />
                        </div>
                        <div className="col p-0 mt-3">
                            <ListBox pointer onClick={() => {setActiveMenu("SECURE")}} style={activeMenu === "SECURE" && {backgroundColor:MainColor, color:'#fff'}} title={t("introduction.gictcoin-page.coin-benefits.item2")} />
                        </div>
                        <div className="col p-0 mt-3">
                            <ListBox pointer onClick={() => {setActiveMenu("COMMISSION")}} style={activeMenu === "COMMISSION" && {backgroundColor:MainColor, color:'#fff'}} title={t("introduction.gictcoin-page.coin-benefits.item3")} />
                        </div>
                        <div className="col p-0 mt-3">
                            <ListBox pointer onClick={() => {setActiveMenu("SPREAD")}} style={activeMenu === "SPREAD" && {backgroundColor:MainColor, color:'#fff'}} title={t("introduction.gictcoin-page.coin-benefits.item4")} />
                        </div>
                    </div>
                    <div className="col-3 d-none d-lg-block text-center pt-4">
                        {componentBeRendered()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GictCoinBenefits
