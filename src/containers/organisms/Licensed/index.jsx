import React from 'react'
import SectionTitle from '../../../components/atoms/SectionTitle'
import MainContent from '../../../components/atoms/MainContent'
import kominfo from '../../../assets/images/kominfo.png'
import associate from '../../../assets/images/associate.png'
import { useTranslation } from 'react-i18next'

const Licensed = () => {
    const {t} = useTranslation()
    return (
        <div className="w-100 mb-5">
            <div className="wrapper">
                <div className="row p-lg-5 p-0">
                    <div className="col-12 col-lg-6 text-center text-lg-left">
                        <SectionTitle title={t("home-page.license.title")} /> 
                        <div className="col p-0 text-center text-lg-left">
                            <MainContent content={t("home-page.license.content")}/>
                        </div>
                    </div>
                    <div className="col-6 overflow-hidden col-lg-3 text-center">
                        <img src={kominfo} alt="Kominfo" />
                    </div>
                    <div className="col-6 overflow-hidden col-lg-3 text-center pt-4">
                        <img src={associate} className="w-100" alt="Associate" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Licensed
