import { faRedoAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import NoInternetImage from '../../../assets/images/no-internet.png'
import MainContent from '../../../components/atoms/MainContent'
import MainTitle from '../../../components/atoms/MainTitle'
import SectionTitle from '../../../components/atoms/SectionTitle'

const NoInternet = () => {
    const [reload,setReload] = useState(false)
    const {t} = useTranslation()
    const history = useHistory()

    const tryReload = () => {
        setReload(true)
        setTimeout(() => {
            setReload(false)
            history.push('/')
        },2000)
    }
    return (
        <div className="w-100 mb-5">
            <div className="wrapper">
                <div className="row justify-content-center mt-5">
                    <div className="col-12 text-center">
                        <img src={NoInternetImage} alt="Not Found" className="img-fluid" />
                    </div>
                    <div className="col-12 col-lg-4 text-center mt-4">
                        <SectionTitle title={t("global.no-internet.title")}/> <br />
                        <MainContent content={t("global.no-internet.content")}/> <br /> <br />
                        {
                            !reload ?
                            <>
                                <MainTitle style={{fontSize:20}} onClick={() => {tryReload()}} title={<FontAwesomeIcon icon={faRedoAlt} />} /> <MainTitle style={{fontSize:20, marginLeft:10}} onClick={() => {tryReload()}}  title={t("global.no-internet.link")} />
                            </>
                            :
                            <MainTitle style={{fontSize:20}} title="Loading ..." />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoInternet
