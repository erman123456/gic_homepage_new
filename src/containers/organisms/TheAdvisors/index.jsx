import React from 'react'
import { useTranslation } from 'react-i18next'
import SectionTitle from '../../../components/atoms/SectionTitle'
import MainContent from '../../../components/atoms/MainContent'
import RectanglePicture from '../../../components/atoms/RectanglePicture'
import paulus from '../../../assets/images/about-paulus.png'
import suwandy from '../../../assets/images/about-suwandy.png'
import merry from '../../../assets/images/about-merry.png'
import ryan from '../../../assets/images/about-ryan.png'

const TheAdvisors = () => {
    const {t} = useTranslation()
    return (
        <div className="w-100 mt-5 mb-5">
            <div className="wrapper">
                <div className="row">
                    <div className="col-12 text-center">
                        <SectionTitle title={t("introduction.about-page.the-advisor.title")}/> <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 col-lg-3 mt-5">
                        <RectanglePicture image={paulus} />
                        <div className="col text-center mt-4">
                            <SectionTitle style={{fontSize:20}} title="Stephanus Paulus"/> <br />
                            <MainContent style={{fontSize:16}} content="Direktur Utama Bursa Berjangka Jakarta (JFX)"/>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 mt-5">
                        <RectanglePicture image={suwandy} />
                        <div className="col text-center mt-4">
                            <SectionTitle style={{fontSize:20}} title="Suwandy Cheng"/> <br />
                            <MainContent style={{fontSize:16}} content="Founder Elliott Wave Indonesia"/>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 mt-5">
                        <RectanglePicture image={merry} />
                        <div className="col text-center mt-4">
                            <SectionTitle style={{fontSize:20}} title="Merry Riana"/> <br />
                            <MainContent style={{fontSize:16}} content="Official Brand Ambassador 2019/2020"/>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 mt-5">
                        <RectanglePicture image={ryan} />
                        <div className="col text-center mt-4">
                            <SectionTitle style={{fontSize:20}} title="Ryan"/> <br />
                            <MainContent style={{fontSize:16}} content="Founder Toffedev"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TheAdvisors
