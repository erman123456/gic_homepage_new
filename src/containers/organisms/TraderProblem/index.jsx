import React from 'react'
import { useTranslation } from 'react-i18next'
import CardGrey from '../../../components/atoms/CardGrey'
import { MainColor } from '../../../config/Design/Color'
import './TraderProblem.css'

const TraderProblem = () => {
    const {t} = useTranslation()
    return (
        <div className="w-100 traderProblemContainer">
            <div className="wrapper position-relative">
                <div className="row justify-content-center wrapperItem">
                    <div className="col-12 col-lg-4">
                        <CardGrey contentCenter style={{title:{color:MainColor}, container: {background:'#fff'}}} noAction title={t("product.gictrade-page-version2.trader-problem.item1.title")} content={t("product.gictrade-page-version2.trader-problem.item1.content")} />
                    </div>
                    <div className="col-12 col-lg-4">
                        <CardGrey contentCenter style={{title:{color:MainColor}, container: {background:'#fff'}}} noAction title={t("product.gictrade-page-version2.trader-problem.item2.title")} content={t("product.gictrade-page-version2.trader-problem.item2.content")} />
                    </div>
                    <div className="col-12 col-lg-4">
                        <CardGrey contentCenter style={{title:{color:MainColor}, container: {background:'#fff'}}} noAction title={t("product.gictrade-page-version2.trader-problem.item3.title")} content={t("product.gictrade-page-version2.trader-problem.item3.content")} />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default TraderProblem
