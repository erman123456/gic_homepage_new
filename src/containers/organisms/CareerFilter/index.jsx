import React, { useState } from 'react'
import CareerEmployee from '../../../assets/images/icon/career-employee.png'
import CarrerLocationImage from '../../../assets/images/icon/career-location.png'
import CardShadow from '../../../components/atoms/CardShadow'
import MainButton from '../../../components/atoms/MainButton'
import Search from '../../../components/atoms/Search'
import SelectBox from '../../../components/atoms/SelectBox'
import { useCareerServices } from '../../../config/Services/CareerServices'
import './CareerFilter.css'

const CareerFilter = () => {
    const [dataInput, setDataInput] = useState({id_lokasi : 0, id_jenis : 0, posisi : ""})
    const {location, typeEnglish, isProcessing, ADD_CAREER_DATA} = useCareerServices()
    
    return (
        <div className="w-100 careerfilter-container">
            <div className="wrapper">
                <div className="row">
                    <div className="col-12 position-relative">
                        <CardShadow boldShadow className={`careerfilter-boxFilter`}  >
                            <div className="row">
                                <div className="col-12 col-lg-3 mt-3 mt-lg-0 text-center">
                                    <SelectBox 
                                        icon={<img src={CarrerLocationImage} alt="Career Location" />} 
                                        style={{select : selfStyle.select}}
                                        data={location}
                                        onChange={(e) => {
                                            setDataInput(prev => ({
                                                ...prev,
                                                id_lokasi : e.value
                                            }))
                                        }}
                                     />
                                </div>
                                <div className="col-12 col-lg-3 mt-3 mt-lg-0 text-center">
                                    <SelectBox 
                                        icon={<img src={CareerEmployee} alt="Career Location" />} 
                                        style={{select : selfStyle.select}}
                                        data={typeEnglish}
                                        onChange={(e) => {
                                            setDataInput(prev => ({
                                                ...prev,
                                                id_jenis : e.value
                                            }))
                                        }}
                                     />
                                </div>
                                <div className="col-12 col-lg-3 mt-3 mt-lg-0 text-center">
                                    <Search 
                                        placeholder={"Position Name"} 
                                        onChange={(e) => {
                                            setDataInput(prev => ({
                                                ...prev,
                                                posisi : e.target.value
                                            }))
                                        }}
                                    />
                                </div>
                                <div className="col-12 col-lg-3 mt-3 mt-lg-0 text-center">
                                    <MainButton onClick={() => {ADD_CAREER_DATA("FILTER", dataInput)}} title={isProcessing ? "Searching ..." : "Search Job"} style={{width:'100%', height:50, borderRadius:100}}  />
                                </div>
                            </div>
                        </CardShadow>
                    </div>
                </div>
            </div>
        </div>
    )
}

const selfStyle = {
    select:{
        borderRadius:100,
        background:'#fff'
    }
}



export default CareerFilter
