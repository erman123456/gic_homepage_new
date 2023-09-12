import React from 'react'
import { useTranslation } from 'react-i18next'
import MainContent from '../../../components/atoms/MainContent'
import MainTitle from '../../../components/atoms/MainTitle'
import CareerImage from '../../../assets/images/career-header.png'
import './CareerHeader.css'

const CareerHeader = ({
    breadcrumb
}) => {

    const {t} = useTranslation()
    return (
        <div className="w-100 pt-2 pb-5 careerheader-container" style={Object.assign({}, selfStyle.container)}>
            {breadcrumb}
            <div className="wrapper">
                <div className="row">
                    <div className="col-12 col-lg-8 text-justify pt-0 pt-lg-3 mt-5 mt-lg-0">
                        <MainTitle title={t("legacy.career.header.title")} /> <br />
                        <MainContent content={t("legacy.career.header.content")} />
                    </div>
                    <div className="col-12 col-lg-4 text-center p-0 mt-5 mt-lg-0">
                        <img src={CareerImage} alt="Career Header" width="100%" height="100%"  />
                    </div>
                </div>
            </div>
        </div>
    )
}

const selfStyle = {
    container : {
        background:'#FFE8D9'
    }
}

export default CareerHeader
