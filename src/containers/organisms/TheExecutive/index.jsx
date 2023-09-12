import React from 'react'
import { useTranslation } from 'react-i18next'
import SectionTitle from '../../../components/atoms/SectionTitle'
import MainContent from '../../../components/atoms/MainContent'
import RectanglePicture from '../../../components/atoms/RectanglePicture'
import peter from '../../../assets/images/peter.png'
import mochtar from '../../../assets/images/mochtar.png'
import darwin from '../../../assets/images/darwin.png'
import yahya from '../../../assets/images/yahya.png'
import nurhakim from '../../../assets/images/nurhakim.png'
import diandra from '../../../assets/images/diandra.png'
import eli from '../../../assets/images/eli.png'
import desi from '../../../assets/images/desi.png'

const TheExecutive = () => {
    const {t} = useTranslation()
    return (
        <div className="w-100 mt-5 mb-5">
            <div className="wrapper">
                <div className="row">
                    <div className="col-12 text-center">
                        <SectionTitle title={t("introduction.about-page.the-executive.title")}/> <br />
                        <MainContent content={t("introduction.about-page.the-executive.content")}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 col-lg-3 mt-5">
                        <RectanglePicture image={peter} />
                        <div className="col text-center mt-4">
                            <SectionTitle style={{fontSize:20}} title="Peter Tandean"/> <br />
                            <MainContent style={{fontSize:16}} content="Co-founder dan CEO"/>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 mt-5">
                        <RectanglePicture image={mochtar} />
                        <div className="col text-center mt-4">
                            <SectionTitle style={{fontSize:20}} title="Mochtar Auning"/> <br />
                            <MainContent style={{fontSize:16}} content="Co-founder"/>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 mt-5">
                        <RectanglePicture image={darwin} />
                        <div className="col text-center mt-4">
                            <SectionTitle style={{fontSize:20}} title="Darwin Djoko"/> <br />
                            <MainContent style={{fontSize:16}} content="CFO"/>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 mt-5">
                        <RectanglePicture image={yahya} />
                        <div className="col text-center mt-4">
                            <SectionTitle style={{fontSize:20}} title="Yahya Kus Handoyo"/> <br />
                            <MainContent style={{fontSize:16}} content="General Manager"/>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 mt-5">
                        <RectanglePicture image={nurhakim} />
                        <div className="col text-center mt-4">
                            <SectionTitle style={{fontSize:20}} title="NurHakim"/> <br />
                            <MainContent style={{fontSize:16}} content="Community Manager"/>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 mt-5">
                        <RectanglePicture image={diandra} />
                        <div className="col text-center mt-4">
                            <SectionTitle style={{fontSize:20}} title="Diandra Prafasta"/> <br />
                            <MainContent style={{fontSize:16}} content="Digital Marketing Manager"/>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 mt-5">
                        <RectanglePicture image={eli} />
                        <div className="col text-center mt-4">
                            <SectionTitle style={{fontSize:20}} title="Elizabeth Yuswantoro"/> <br />
                            <MainContent style={{fontSize:16}} content="Public Relation Manager"/>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 mt-5">
                        <RectanglePicture image={desi} />
                        <div className="col text-center mt-4">
                            <SectionTitle style={{fontSize:20}} title="Desi Novitasari"/> <br />
                            <MainContent style={{fontSize:16}} content="Growth Coordinator"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TheExecutive
