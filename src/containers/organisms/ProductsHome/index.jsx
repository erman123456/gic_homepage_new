import React from 'react'
import SelectionTitle from '../../../components/atoms/SectionTitle'
import CardGrey from '../../../components/atoms/CardGrey'
import { useTranslation } from 'react-i18next'

// Icon Import
import GicAcademy from '../../../assets/images/icon/gicacademy-icon.png'
import GicSocialTrade from '../../../assets/images/icon/socialtrade-icon.png'
import GicCare from '../../../assets/images/icon/giccare-icon.png'
import GICAffiliate from '../../../assets/images/icon/gicaffiliate-icon.png'
import GicPartner from '../../../assets/images/icon/gicpartner-icon.png'
import GicTrade from '../../../assets/images/icon/gictrade-icon.png'
import { useHistory } from 'react-router-dom'

const ProductsHome = () => {
    const {t} = useTranslation()
    const history = useHistory()
    return (
        <div className="wrapper mt-lg-5 mb-5">
            <div className="row">
                <div className="col-12 text-center">
                    <SelectionTitle title={t("home-page.product.title")} />
                </div>
            </div>
            <div className="row mt-lg-2">
                <div className="col-12 col-lg-4 mt-5">
                    <CardGrey text={t("global.learn-more")} onClick={() => {history.push('/products/gic-trade')}} title={t("home-page.product.item1.title")} content={t("home-page.product.item1.content")} withIcon={GicTrade}/>
                </div>
                <div className="col-12 col-lg-4 mt-5">
                    <CardGrey text={t("global.learn-more")} onClick={() => {history.push('/products/social-trade')}} title={t("home-page.product.item2.title")} content={t("home-page.product.item2.content")} withIcon={GicSocialTrade}/>
                </div>
                <div className="col-12 col-lg-4 mt-5">
                    <CardGrey text={t("global.learn-more")} onClick={() => {history.push('/products/gic-academy')}} title={t("home-page.product.item3.title")} content={t("home-page.product.item3.content")} withIcon={GicAcademy}/>
                </div>
                <div className="col-12 col-lg-4 mt-5">
                    <CardGrey text={t("global.learn-more")} onClick={() => {history.push('/products/gic-care')}} title={t("home-page.product.item4.title")} content={t("home-page.product.item4.content")} withIcon={GicCare}/>
                </div>
                <div className="col-12 col-lg-4 mt-5">
                    <CardGrey text={t("global.learn-more")} onClick={() => {history.push('/products/gic-partner')}} title={t("home-page.product.item5.title")} content={t("home-page.product.item5.content")} withIcon={GicPartner}/>
                </div>
                <div className="col-12 col-lg-4 mt-5">
                    <CardGrey text={t("global.learn-more")} onClick={() => {history.push('/products/gic-affiliate')}} title={t("home-page.product.item6.title")} content={t("home-page.product.item6.content")} withIcon={GICAffiliate}/>
                </div>
            </div>
        </div>
    )
}

export default ProductsHome
