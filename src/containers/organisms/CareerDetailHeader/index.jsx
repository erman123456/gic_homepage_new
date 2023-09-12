import React from 'react'
import { useTranslation } from 'react-i18next'
import CareerImage from '../../../assets/images/career-header.png'
import MainButton from '../../../components/atoms/MainButton'
import MainTitle from '../../../components/atoms/MainTitle'
import './CareerHeader.css'

const CareerDetailHeader = ({
    breadcrumb,
    ...props
}) => {

    const {t} = useTranslation()
    return (
        <div className="w-100 pt-2 pb-5 careerheader-container" style={Object.assign({}, selfStyle.container)}>
            {breadcrumb}
            <div className="wrapper">
                <div className="row">
                    <div className="col-12 col-lg-8 text-justify pt-0 pt-lg-3 mt-5 mt-lg-0">
                        <MainTitle title={props.data && props.data.nama} style={{color:'#000'}} /> <br />
                        <MainButton title={t("legacy.career.vacancy.apply")} style={{borderRadius:100, padding:10, paddingLeft:50, paddingRight:50, marginTop:40}} className="d-none d-lg-block" />
                    </div>
                    <div className="col-12 col-lg-4 text-center p-0 mt-5 mt-lg-0">
                        <img src={CareerImage} alt="Career Header" width="100%" height="100%"  />
                        <div className="wrapper">
                            <MainButton title={t("legacy.career.vacancy.apply")} style={{borderRadius:100, padding:10, paddingLeft:50, paddingRight:50, marginTop:40}} className="d-block d-lg-none w-100" />
                        </div>
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

export default CareerDetailHeader
