import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import CareerLocationImage from '../../../assets/images/icon/career-location-white.png'
import CarrerTypeImage from '../../../assets/images/icon/career-type-white.png'
import CardShadow from '../../../components/atoms/CardShadow'
import MainButton from '../../../components/atoms/MainButton'
import MainContent from '../../../components/atoms/MainContent'
import { MainColor } from '../../../config/Design/Color'
import { useCareerServices } from '../../../config/Services/CareerServices'
import notFound from '../../../assets/images/no-internet.png'
import MainTitle from '../../../components/atoms/MainTitle'

const JobVacancy = () => {
    const {t} = useTranslation()
    const history = useHistory()
    const [highlight,setHighlight] = useState(true)
    const activeStyle = {borderRadius:100, padding:15, paddingLeft:40, paddingRight:40, background:MainColor}
    const inactiveStyle = {borderRadius:100, padding:15, paddingLeft:40, paddingRight:40, background:'#fff', color:'#888'}

    const CAREER_DATA = useSelector(state => state.careerReducer.data)
    const {ADD_CAREER_DATA} = useCareerServices()

    useEffect(() => {
        if(CAREER_DATA.length === 0){
            ADD_CAREER_DATA("RESET")
        }
    },[])

   
    return (
        <div className="w-100 pb-5">
            <div className="wrapper">
                <div className="row justify-content-center mt-5">
                    <div className="col-9 col-lg-5">
                        <div className="row justify-content-center">
                                <MainButton style={highlight ? activeStyle : inactiveStyle} onClick={() => {setHighlight(true); console.log(CAREER_DATA)}}  title={t("legacy.career.vacancy.hightlight")} />
                                <MainButton style={highlight ? inactiveStyle : activeStyle} onClick={() => {setHighlight(false)}} title={t("legacy.career.vacancy.newest")} />
                        </div>
                    </div>
                </div>
                <div className="row pl-3 pl-lg-0 pr-3 pr-lg-0">
                    {   CAREER_DATA.length > 0 
                        ?
                        CAREER_DATA.map((item) => {
                            return (
                                <CardShadow key={item.id} style={selfStyle.boxVacancy} className="mt-5" >
                                    <div className="row">
                                        <div className="col-12 col-lg-3 pt-3">
                                            <MainContent content={item.nama} />
                                            <button className="btn bg-none d-block d-lg-none p-0 float-right">
                                                <FontAwesomeIcon icon={faChevronRight} />
                                            </button>
                                            <hr className="d-block d-lg-none" />
                                        </div>
                                        <div className="col-12 col-lg-3 pt-3 d-flex">
                                            <MainButton title={<img alt="Location" src={CareerLocationImage} />} style={{borderRadius:'100%', width:40, height:40, padding:7}} />
                                            <MainContent content={item.lokasi} style={{marginLeft:15, marginTop:3}} />
                                        </div>
                                        <div className="col-12 col-lg-3 pt-3 d-flex">
                                            <MainButton title={<img alt="Type" src={CarrerTypeImage} />} style={{borderRadius:'100%', width:40, height:40, padding:7}} />
                                            <MainContent content={item.jenis} style={{marginLeft:15, marginTop:3}} />
                                        </div>
                                        <div className="col-12 col-lg-3 pt-2 d-none d-lg-block">
                                            <MainButton title={t("legacy.career.vacancy.see-detail")} style={{width:'100%', height:50, borderRadius:100}}
                                                onClick={() => {
                                                    history.push({
                                                        pathname : '/support/career/career-detail/'+item.id,
                                                    })
                                                }}
                                             />
                                        </div>
                                    </div>
                                </CardShadow>
                            )
                        })
                        :
                        <div className="col-12 text-center mt-3">
                            <img src={notFound} alt="NO DATA" /> <br />
                            <MainTitle title="Jobs Unavailable" />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

const selfStyle = {
    boxVacancy : {
        padding:30,
        paddingLeft:30,
        paddingRight:30,
    }
}

export default JobVacancy
