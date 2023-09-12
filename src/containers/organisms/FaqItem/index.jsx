import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import MainContent from '../../../components/atoms/MainContent'
import MainTitle from '../../../components/atoms/MainTitle'
import SectionTitle from '../../../components/atoms/SectionTitle'
import ReactHtmlParser from 'react-html-parser';
import { MainColor } from '../../../config/Design/Color'

const FaqItem = () => {
    const [icon,setIcon] = useState({
        item1 : false,
        item2 : true,
        item3 : true,
        item4 : true,
        item5 : true,
        item6 : true,
        item7 : true,
        item8 : true,
        item9 : true,
        item10 : true,
        item11 : true,
        item12 : true,
        item13 : true,
        item14 : true,
        item15 : true,
        item16 : true,
        item17 : true,
        item18 : true,
        item19 : true,
        item20 : true,
        item21 : true,
        item22 : true,
    })

    const handleShow = (item = 'item1') =>  {
        if(icon[item]){
            setIcon((prev) => ({
                ...prev,
            [item] : false
            }))
        }else{
            setIcon((prev) => ({
                ...prev,
            [item] : true
            }))
        }
    }
    const {t} = useTranslation()
    return (
        <div className="w-100 mb-5">
            <div className="wrapper">
                <div className="row">
                    <div className="col-12 text-center">
                        <SectionTitle title={t("legacy.terms-page.header.title")} />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item1')}}  data-bs-toggle="collapse" href="#item1" role="button" aria-expanded="false" aria-controls="item1">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item1 ? faPlus : faMinus} /> <MainTitle title={t("legacy.faq.item1.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse show" id="item1">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                        <MainContent style={{fontWeight:500, fontSize:20}} content={ReactHtmlParser(t("legacy.faq.item1.content"))} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-12">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item2')}}  data-bs-toggle="collapse" href="#item2" role="button" aria-expanded="false" aria-controls="item2">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item2 ? faPlus : faMinus} /> <MainTitle title={t("legacy.faq.item2.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item2">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                        <MainContent style={{fontWeight:500, fontSize:20}} content={ReactHtmlParser(t("legacy.faq.item2.content"))} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-12">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item3')}}  data-bs-toggle="collapse" href="#item3" role="button" aria-expanded="false" aria-controls="item3">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item3 ? faPlus : faMinus} /> <MainTitle title={t("legacy.faq.item3.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item3">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                        <MainContent style={{fontWeight:500, fontSize:20}} content={ReactHtmlParser(t("legacy.faq.item3.content"))} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-12">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item4')}}  data-bs-toggle="collapse" href="#item4" role="button" aria-expanded="false" aria-controls="item4">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item4 ? faPlus : faMinus} /> <MainTitle title={t("legacy.faq.item4.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item4">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                        <MainContent style={{fontWeight:500, fontSize:20}} content={ReactHtmlParser(t("legacy.faq.item4.content"))} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item5')}}  data-bs-toggle="collapse" href="#item5" role="button" aria-expanded="false" aria-controls="item5">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item5 ? faPlus : faMinus} /> <MainTitle title={t("legacy.faq.item5.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item5">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                        <MainContent style={{fontWeight:500, fontSize:20}} content={ReactHtmlParser(t("legacy.faq.item5.content"))} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item6')}}  data-bs-toggle="collapse" href="#item6" role="button" aria-expanded="false" aria-controls="item6">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item6 ? faPlus : faMinus} /> <MainTitle title={t("legacy.faq.item6.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item6">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                        <MainContent style={{fontWeight:500, fontSize:20}} content={ReactHtmlParser(t("legacy.faq.item6.content"))} /> <br />

                                        <div className="table-responsive mt-5">
                                            <table className="table" width="100%">
                                                <thead style={{background:MainColor}}>
                                                    <tr className="text-white">
                                                        <th>Trader</th>
                                                        <th colSpan="2">Market Maker</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td rowSpan="4" className="align-middle">
                                                            Trader X buy 1 lot EurUSD
                                                        </td>
                                                        <td>Market Maker A (equity 5000)</td>
                                                        <td>Sell 0,25 lot EurUsd</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Market Maker B (equity 5000)</td>
                                                        <td>Sell 0,25 lot EurUsd</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Market Maker C (equity 5000)</td>
                                                        <td>Sell 0,25 lot EurUsd</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Market Maker D (equity 5000)</td>
                                                        <td>Sell 0,25 lot EurUsd</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="table-responsive mt-5">
                                            <table className="table" width="100%">
                                                <thead style={{background:MainColor}}>
                                                    <tr className="text-white">
                                                        <th>Trader</th>
                                                        <th colSpan="2">Market Maker</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td rowSpan="4" className="align-middle">
                                                            Trader X buy 1 lot EurUSD
                                                        </td>
                                                        <td>Market Maker A (equity 5000)</td>
                                                        <td>Sell 0,058823529 lot EurUsd</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Market Maker B (equity 10000)</td>
                                                        <td>Sell 0,11764705 lot EurUsd</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Market Maker C (equity 20000)</td>
                                                        <td>Sell 0,235294117 lot EurUsd</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Market Maker D (equity 30000)</td>
                                                        <td>Sell 0,58823594 lot EurUsd</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item7')}}  data-bs-toggle="collapse" href="#item7" role="button" aria-expanded="false" aria-controls="item7">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item7 ? faPlus : faMinus} /> <MainTitle title={t("legacy.faq.item7.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item7">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                        <MainContent style={{fontWeight:500, fontSize:20}} content={ReactHtmlParser(t("legacy.faq.item7.content"))} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item8')}}  data-bs-toggle="collapse" href="#item8" role="button" aria-expanded="false" aria-controls="item8">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item8 ? faPlus : faMinus} /> <MainTitle title={t("legacy.faq.item8.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item8">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                        <MainContent style={{fontWeight:500, fontSize:20}} content={ReactHtmlParser(t("legacy.faq.item8.content"))} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item9')}}  data-bs-toggle="collapse" href="#item9" role="button" aria-expanded="false" aria-controls="item9">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item9 ? faPlus : faMinus} /> <MainTitle title={t("legacy.faq.item9.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item9">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                        <MainContent style={{fontWeight:500, fontSize:20}} content={ReactHtmlParser(t("legacy.faq.item9.content"))} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item10')}}  data-bs-toggle="collapse" href="#item10" role="button" aria-expanded="false" aria-controls="item10">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item10 ? faPlus : faMinus} /> <MainTitle title={t("legacy.faq.item10.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item10">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                        <MainContent style={{fontWeight:500, fontSize:20}} content={ReactHtmlParser(t("legacy.faq.item10.content"))} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item11')}}  data-bs-toggle="collapse" href="#item11" role="button" aria-expanded="false" aria-controls="item11">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item11 ? faPlus : faMinus} /> <MainTitle title={t("legacy.faq.item11.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item11">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                        <MainContent style={{fontWeight:500, fontSize:20}} content={ReactHtmlParser(t("legacy.faq.item11.content"))} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item12')}}  data-bs-toggle="collapse" href="#item12" role="button" aria-expanded="false" aria-controls="item12">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item12 ? faPlus : faMinus} /> <MainTitle title={t("legacy.faq.item12.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item12">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                        <MainContent style={{fontWeight:500, fontSize:20}} content={ReactHtmlParser(t("legacy.faq.item12.content"))} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item13')}}  data-bs-toggle="collapse" href="#item13" role="button" aria-expanded="false" aria-controls="item13">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item13 ? faPlus : faMinus} /> <MainTitle title={t("legacy.faq.item13.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item13">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                        <MainContent style={{fontWeight:500, fontSize:20}} content={ReactHtmlParser(t("legacy.faq.item13.content"))} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item14')}}  data-bs-toggle="collapse" href="#item14" role="button" aria-expanded="false" aria-controls="item14">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item14 ? faPlus : faMinus} /> <MainTitle title={t("legacy.faq.item14.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item14">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                        <MainContent style={{fontWeight:500, fontSize:20}} content={ReactHtmlParser(t("legacy.faq.item14.content"))} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item15')}}  data-bs-toggle="collapse" href="#item15" role="button" aria-expanded="false" aria-controls="item15">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item15 ? faPlus : faMinus} /> <MainTitle title={t("legacy.faq.item15.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item15">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                        <MainContent style={{fontWeight:500, fontSize:20}} content={ReactHtmlParser(t("legacy.faq.item15.content"))} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item16')}}  data-bs-toggle="collapse" href="#item16" role="button" aria-expanded="false" aria-controls="item16">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item16 ? faPlus : faMinus} /> <MainTitle title={t("legacy.faq.item16.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item16">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                        <MainContent style={{fontWeight:500, fontSize:20}} content={ReactHtmlParser(t("legacy.faq.item16.content"))} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item17')}}  data-bs-toggle="collapse" href="#item17" role="button" aria-expanded="false" aria-controls="item17">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item17 ? faPlus : faMinus} /> <MainTitle title={t("legacy.faq.item17.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item17">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                        <MainContent style={{fontWeight:500, fontSize:20}} content={ReactHtmlParser(t("legacy.faq.item17.content"))} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item18')}}  data-bs-toggle="collapse" href="#item18" role="button" aria-expanded="false" aria-controls="item18">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item18 ? faPlus : faMinus} /> <MainTitle title={t("legacy.faq.item18.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item18">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                        <MainContent style={{fontWeight:500, fontSize:20}} content={ReactHtmlParser(t("legacy.faq.item18.content"))} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item19')}}  data-bs-toggle="collapse" href="#item19" role="button" aria-expanded="false" aria-controls="item19">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item19 ? faPlus : faMinus} /> <MainTitle title={t("legacy.faq.item19.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item19">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                        <MainContent style={{fontWeight:500, fontSize:20}} content={ReactHtmlParser(t("legacy.faq.item19.content"))} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item20')}}  data-bs-toggle="collapse" href="#item20" role="button" aria-expanded="false" aria-controls="item20">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item20 ? faPlus : faMinus} /> <MainTitle title={t("legacy.faq.item20.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item20">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                        <MainContent style={{fontWeight:500, fontSize:20}} content={ReactHtmlParser(t("legacy.faq.item20.content"))} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item21')}}  data-bs-toggle="collapse" href="#item21" role="button" aria-expanded="false" aria-controls="item21">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item21 ? faPlus : faMinus} /> <MainTitle title={t("legacy.faq.item21.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item21">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                        <MainContent style={{fontWeight:500, fontSize:20}} content={ReactHtmlParser(t("legacy.faq.item21.content"))} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item22')}}  data-bs-toggle="collapse" href="#item22" role="button" aria-expanded="false" aria-controls="item22">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item22 ? faPlus : faMinus} /> <MainTitle title={t("legacy.faq.item22.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item22">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                        <MainContent style={{fontWeight:500, fontSize:20}} content={ReactHtmlParser(t("legacy.faq.item22.content"))} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqItem
