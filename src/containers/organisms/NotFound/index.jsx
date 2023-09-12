import React from 'react'
import { useTranslation } from 'react-i18next'
import NotFoundImage from '../../../assets/images/404-new.png'
import SectionTitle from '../../../components/atoms/SectionTitle'
import MainContent from '../../../components/atoms/MainContent'
import MainTitle from '../../../components/atoms/MainTitle'
import { useHistory } from 'react-router-dom'

const NotFoundComponent = () => {
    const {t} = useTranslation()
    const history = useHistory()
    return (
        <div className="w-100 mb-5">
            <div className="wrapper">
                <div className="row justify-content-center mt-5">
                    <div className="col-12 text-center">
                        <img src={NotFoundImage} alt="Not Found" className="img-fluid" />
                    </div>
                    <div className="col-12 col-lg-4 text-center mt-4">
                        <SectionTitle title={t("global.not-found.title")}/> <br />
                        <MainContent content={t("global.not-found.content")}/> <br /> <br />
                        <MainTitle style={{fontSize:20}} onClick={() => {history.push('/')}} title={t("global.not-found.link")} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFoundComponent
