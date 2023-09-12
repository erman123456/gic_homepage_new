import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import MainContent from '../../../components/atoms/MainContent'
import MainTitle from '../../../components/atoms/MainTitle'
import SectionTitle from '../../../components/atoms/SectionTitle'

const TermsAndCondtion = () => {
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
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item1 ? faPlus : faMinus} /> <MainTitle title={t("legacy.terms-page.item1.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse show" id="item1">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                        <MainContent style={{fontWeight:500, fontSize:20}} content={t("legacy.terms-page.item1.content")} /> <br /><br />
                                        <MainContent style={{fontSize:20}} content={t("legacy.terms-page.item1.highlight")} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 mt-3">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item2')}}  data-bs-toggle="collapse" href="#item2" role="button" aria-expanded="false" aria-controls="item2">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item2 ? faPlus : faMinus} /> <MainTitle title={t("legacy.terms-page.item2.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item2">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                    <MainContent style={{fontWeight:500, fontSize:20}} content={t("legacy.terms-page.item2.content")} /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 mt-3">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item3')}}  data-bs-toggle="collapse" href="#item3" role="button" aria-expanded="false" aria-controls="item3">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item3 ? faPlus : faMinus} /> <MainTitle title={t("legacy.terms-page.item3.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item3">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                    <MainContent style={{fontWeight:500, fontSize:20}} content={t("legacy.terms-page.item3.content")} /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 mt-3">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item4')}}  data-bs-toggle="collapse" href="#item4" role="button" aria-expanded="false" aria-controls="item4">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item4 ? faPlus : faMinus} /> <MainTitle title={t("legacy.terms-page.item4.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item4">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                    <MainContent style={{fontWeight:500, fontSize:20}} content={t("legacy.terms-page.item4.content")} /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 mt-3">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item5')}}  data-bs-toggle="collapse" href="#item5" role="button" aria-expanded="false" aria-controls="item5">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item5 ? faPlus : faMinus} /> <MainTitle title={t("legacy.terms-page.item5.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item5">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                    <MainContent style={{fontWeight:500, fontSize:20}} content={t("legacy.terms-page.item5.content")} /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 mt-3">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item6')}}  data-bs-toggle="collapse" href="#item6" role="button" aria-expanded="false" aria-controls="item6">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item6 ? faPlus : faMinus} /> <MainTitle title={t("legacy.terms-page.item6.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item6">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                        <MainContent style={{fontWeight:500, fontSize:20}} content={t("legacy.terms-page.item6.content")} /> 
                                        <div className="card border-0">
                                            <div className="card-body p-5">
                                                <div className="row d-flex">
                                                    <div style={{width:'2%', float:'left'}}>
                                                        <MainContent style={{fontWeight:500, fontSize:20}} content="a)." />
                                                    </div>
                                                    <div style={{float:'left', width:'98%'}}>
                                                        <MainContent style={{fontWeight:500, fontSize:20}} content={t("legacy.terms-page.item6.a")} /> 
                                                    </div>
                                                </div>
                                                <div className="row d-flex mt-2">
                                                    <div style={{width:'2%', float:'left'}}>
                                                        <MainContent style={{fontWeight:500, fontSize:20}} content="b)." />
                                                    </div>
                                                    <div style={{float:'left', width:'98%'}}>
                                                        <MainContent style={{fontWeight:500, fontSize:20}} content={t("legacy.terms-page.item6.b")} /> 
                                                    </div>
                                                </div>
                                                <div className="row d-flex mt-2">
                                                    <div style={{width:'2%', float:'left'}}>
                                                        <MainContent style={{fontWeight:500, fontSize:20}} content="c)." />
                                                    </div>
                                                    <div style={{float:'left', width:'98%'}}>
                                                        <MainContent style={{fontWeight:500, fontSize:20}} content={t("legacy.terms-page.item6.c")} /> 
                                                    </div>
                                                </div>
                                                <div className="row d-flex mt-2">
                                                    <div style={{width:'2%', float:'left'}}>
                                                        <MainContent style={{fontWeight:500, fontSize:20}} content="d)." />
                                                    </div>
                                                    <div style={{float:'left', width:'98%'}}>
                                                        <MainContent style={{fontWeight:500, fontSize:20}} content={t("legacy.terms-page.item6.d")} /> 
                                                    </div>
                                                </div>
                                                <div className="row d-flex mt-2">
                                                    <div style={{width:'2%', float:'left'}}>
                                                        <MainContent style={{fontWeight:500, fontSize:20}} content="e)." />
                                                    </div>
                                                    <div style={{float:'left', width:'98%'}}>
                                                        <MainContent style={{fontWeight:500, fontSize:20}} content={t("legacy.terms-page.item6.e")} /> 
                                                    </div>
                                                </div>
                                                <div className="row d-flex mt-2">
                                                    <div style={{width:'2%', float:'left'}}>
                                                        <MainContent style={{fontWeight:500, fontSize:20}} content="f)." />
                                                    </div>
                                                    <div style={{float:'left', width:'98%'}}>
                                                        <MainContent style={{fontWeight:500, fontSize:20}} content={t("legacy.terms-page.item6.f")} /> 
                                                    </div>
                                                </div>
                                                <div className="row d-flex mt-2">
                                                    <div style={{width:'2%', float:'left'}}>
                                                        <MainContent style={{fontWeight:500, fontSize:20}} content="g)." />
                                                    </div>
                                                    <div style={{float:'left', width:'98%'}}>
                                                        <MainContent style={{fontWeight:500, fontSize:20}} content={t("legacy.terms-page.item6.g")} /> 
                                                    </div>
                                                </div>
                                                <div className="row d-flex mt-2">
                                                    <div style={{width:'2%', float:'left'}}>
                                                        <MainContent style={{fontWeight:500, fontSize:20}} content="h)." />
                                                    </div>
                                                    <div style={{float:'left', width:'98%'}}>
                                                        <MainContent style={{fontWeight:500, fontSize:20}} content={t("legacy.terms-page.item6.h")} /> 
                                                    </div>
                                                </div>
                                                <div className="row d-flex mt-2">
                                                    <div style={{width:'2%', float:'left'}}>
                                                        <MainContent style={{fontWeight:500, fontSize:20}} content="i)." />
                                                    </div>
                                                    <div style={{float:'left', width:'98%'}}>
                                                        <MainContent style={{fontWeight:500, fontSize:20}} content={t("legacy.terms-page.item6.i")} /> 
                                                    </div>
                                                </div>
                                                <div className="row d-flex mt-2">
                                                    <div style={{width:'2%', float:'left'}}>
                                                        <MainContent style={{fontWeight:500, fontSize:20}} content="j)." />
                                                    </div>
                                                    <div style={{float:'left', width:'98%'}}>
                                                        <MainContent style={{fontWeight:500, fontSize:20}} content={t("legacy.terms-page.item6.j")} /> 
                                                    </div>
                                                </div>
                                                <div className="row d-flex mt-2">
                                                    <div style={{width:'2%', float:'left'}}>
                                                        <MainContent style={{fontWeight:500, fontSize:20}} content="k)." />
                                                    </div>
                                                    <div style={{float:'left', width:'98%'}}>
                                                        <MainContent style={{fontWeight:500, fontSize:20}} content={t("legacy.terms-page.item6.k")} /> 
                                                    </div>
                                                </div>
                                                <div className="row d-flex mt-2">
                                                    <div style={{width:'2%', float:'left'}}>
                                                        <MainContent style={{fontWeight:500, fontSize:20}} content="l)." />
                                                    </div>
                                                    <div style={{float:'left', width:'98%'}}>
                                                        <MainContent style={{fontWeight:500, fontSize:20}} content={t("legacy.terms-page.item6.l")} /> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <MainContent style={{fontWeight:500, fontSize:20}} content={t("legacy.terms-page.item6.next-content")} /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 mt-3">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item7')}}  data-bs-toggle="collapse" href="#item7" role="button" aria-expanded="false" aria-controls="item7">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item7 ? faPlus : faMinus} /> <MainTitle title={t("legacy.terms-page.item7.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item7">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                    <MainContent style={{fontWeight:500, fontSize:20}} content={t("legacy.terms-page.item7.content")} /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 mt-3">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item8')}}  data-bs-toggle="collapse" href="#item8" role="button" aria-expanded="false" aria-controls="item8">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item8 ? faPlus : faMinus} /> <MainTitle title={t("legacy.terms-page.item8.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item8">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                    <MainContent style={{fontWeight:500, fontSize:20}} content={t("legacy.terms-page.item8.content")} /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 mt-3">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item9')}}  data-bs-toggle="collapse" href="#item9" role="button" aria-expanded="false" aria-controls="item9">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item9 ? faPlus : faMinus} /> <MainTitle title={t("legacy.terms-page.item9.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item9">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                    <MainContent style={{fontWeight:500, fontSize:20}} content={t("legacy.terms-page.item9.content")} /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 mt-3">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item10')}}  data-bs-toggle="collapse" href="#item10" role="button" aria-expanded="false" aria-controls="item10">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item10 ? faPlus : faMinus} /> <MainTitle title={t("legacy.terms-page.item10.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item10">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                    <MainContent style={{fontWeight:500, fontSize:20}} content={t("legacy.terms-page.item10.content")} /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 mt-3">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item11')}}  data-bs-toggle="collapse" href="#item11" role="button" aria-expanded="false" aria-controls="item11">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item11 ? faPlus : faMinus} /> <MainTitle title={t("legacy.terms-page.item11.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item11">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                    <MainContent style={{fontWeight:500, fontSize:20}} content={t("legacy.terms-page.item11.content")} /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 mt-3">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item12')}}  data-bs-toggle="collapse" href="#item12" role="button" aria-expanded="false" aria-controls="item12">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item12 ? faPlus : faMinus} /> <MainTitle title={t("legacy.terms-page.item12.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item12">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                    <MainContent style={{fontWeight:500, fontSize:20}} content={t("legacy.terms-page.item12.content")} /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 mt-3">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item13')}}  data-bs-toggle="collapse" href="#item13" role="button" aria-expanded="false" aria-controls="item13">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item13 ? faPlus : faMinus} /> <MainTitle title={t("legacy.terms-page.item13.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item13">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                    <MainContent style={{fontWeight:500, fontSize:20}} content={t("legacy.terms-page.item13.content")} /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 mt-3">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item14')}}  data-bs-toggle="collapse" href="#item14" role="button" aria-expanded="false" aria-controls="item14">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item14 ? faPlus : faMinus} /> <MainTitle title={t("legacy.terms-page.item14.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item14">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                    <MainContent style={{fontWeight:500, fontSize:20}} content={t("legacy.terms-page.item14.content")} /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 mt-3">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item15')}}  data-bs-toggle="collapse" href="#item15" role="button" aria-expanded="false" aria-controls="item15">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item15 ? faPlus : faMinus} /> <MainTitle title={t("legacy.terms-page.item15.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item15">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                    <MainContent style={{fontWeight:500, fontSize:20}} content={t("legacy.terms-page.item15.content")} /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 mt-3">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item16')}}  data-bs-toggle="collapse" href="#item16" role="button" aria-expanded="false" aria-controls="item16">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item16 ? faPlus : faMinus} /> <MainTitle title={t("legacy.terms-page.item16.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item16">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                    <MainContent style={{fontWeight:500, fontSize:20}} content={t("legacy.terms-page.item16.content")} />
                                    <div className="card border-0">
                                            <div className="card-body p-5">
                                                <div className="row d-flex">
                                                    <div style={{width:'2%', float:'left'}}>
                                                        <MainContent style={{fontWeight:500, fontSize:20}} content="a)." />
                                                    </div>
                                                    <div style={{float:'left', width:'98%'}}>
                                                        <MainContent style={{fontWeight:500, fontSize:20}} content={t("legacy.terms-page.item16.a")} /> 
                                                    </div>
                                                </div>
                                                <div className="row d-flex mt-2">
                                                    <div style={{width:'2%', float:'left'}}>
                                                        <MainContent style={{fontWeight:500, fontSize:20}} content="b)." />
                                                    </div>
                                                    <div style={{float:'left', width:'98%'}}>
                                                        <MainContent style={{fontWeight:500, fontSize:20}} content={t("legacy.terms-page.item16.b")} /> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <MainContent style={{fontWeight:700, fontSize:20}} content={t("legacy.terms-page.item16.highlight")} />  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 mt-3">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item17')}}  data-bs-toggle="collapse" href="#item17" role="button" aria-expanded="false" aria-controls="item17">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item17 ? faPlus : faMinus} /> <MainTitle title={t("legacy.terms-page.item17.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item17">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                    <MainContent style={{fontWeight:500, fontSize:20}} content={t("legacy.terms-page.item17.content")} /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 mt-3">
                        <div>
                            <p>
                                <span onClick={() => {handleShow('item18')}}  data-bs-toggle="collapse" href="#item18" role="button" aria-expanded="false" aria-controls="item18">
                                    <FontAwesomeIcon style={{fontSize:25}} icon={icon.item18 ? faPlus : faMinus} /> <MainTitle title={t("legacy.terms-page.item18.title")} style={{fontSize:25, marginLeft:5}} />
                                </span>
                            </p>
                            <div className="collapse" id="item18">
                                <div className="card border-0 pl-2">
                                    <div className="card-body">
                                    <MainContent style={{fontWeight:500, fontSize:20}} content={t("legacy.terms-page.item18.content")} /> 
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

export default TermsAndCondtion
