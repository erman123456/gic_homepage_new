import React from 'react'
import { useTranslation } from 'react-i18next'
import MainContent from '../../../components/atoms/MainContent'
import MainTitle from '../../../components/atoms/MainTitle'
import innovation from '../../../assets/images/new-about.png'


const AboutUsGreeting = () => {
    const {t} = useTranslation()
    return (
        <div className="wrapper mb-5">
            <div className="row pb-5">
                <div className="col-12 col-lg-6 mt-5 text-lg-left text-center">
                    <MainTitle title={t("introduction.about-page.greeting.title")}/>
                    <div className="col p-0 mt-3 text-lg-left text-center">
                        <MainContent content={t("introduction.about-page.greeting.content")}/>
                    </div>
                </div>
                <div className="col-12 d-none d-lg-block col-lg-6 mt-5 text-right justify-content-center align-items-center">
                    <img src={innovation} alt="Inovation" />
                </div>
            </div>
        </div>
    )
}

export default AboutUsGreeting
