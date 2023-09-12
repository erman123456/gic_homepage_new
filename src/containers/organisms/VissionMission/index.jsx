import React from 'react'
import { useTranslation } from 'react-i18next'
import MainContent from '../../../components/atoms/MainContent'
import SectionTitle from '../../../components/atoms/SectionTitle'

const VissionMission = () => {
    const {t} = useTranslation()
    return (
        <div className="w-100 bg-light pb-5 pt-5">
            <div className="wrapper">
                <div className="row">
                    <div className="col-12 col-lg-6 text-lg-left text-center">
                        <SectionTitle title={t("introduction.about-page.vission.title")}/>
                        <div className="col p-0 mt-3 text-lg-left text-center">
                            <MainContent content={t("introduction.about-page.vission.content")} />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 text-lg-left text-center mt-5 mt-lg-0">
                        <SectionTitle title={t("introduction.about-page.mission.title")}/>
                        <div className="col p-0 mt-3 text-lg-left text-center">
                            <MainContent content={t("introduction.about-page.mission.content")} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VissionMission
