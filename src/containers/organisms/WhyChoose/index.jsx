import React from 'react'
import SelectionTitle from '../../../components/atoms/SectionTitle'
import MainList from '../../../components/moleculs/MainList'
import MerryRianaHome from '../../../assets/images/merry-riana-home.png'
import { useTranslation } from 'react-i18next'

const WhyChoose = () => {
    const {t} = useTranslation()
    return (
        <div className="wrapper mt-lg-5">
            <div className="row">
                <div className="col-6 d-none d-lg-block text-center">
                    <img src={MerryRianaHome} alt="BRAND AMBASADOR"/>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="row mt-lg-5">
                        <div className="col-12 text-center text-lg-left">
                            <SelectionTitle title={t("home-page.choose-us.title")}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-9 mt-4">
                            <MainList highlightContent={t("home-page.choose-us.item1.highlightContent")} content={t("home-page.choose-us.item1.content")} />
                        </div>
                        <div className="col-md-12 col-lg-9 mt-3">
                            <MainList highlightContent={t("home-page.choose-us.item2.highlightContent")} content={t("home-page.choose-us.item2.content")} />
                        </div>
                        <div className="col-md-12 col-lg-9 mt-3">
                            <MainList highlightContent={t("home-page.choose-us.item3.highlightContent")} content={t("home-page.choose-us.item3.content")} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChoose
