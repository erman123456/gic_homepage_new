import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { $axios } from "../../Axios"
import setCareerData from "../../Redux/Action/CareerAction/setCareerData"

export const useCareerServices = () => {
    const dispatch = useDispatch()
    const [isProcessing,setIsProcessing] = useState(false)
    const [location,setLocation] = useState([
        {value:0, label:"All Location"}
    ])
    const [typeIndo, setTypeIndo] = useState([
        {value:0, label: "Semua Jenis"}
    ])
    const [typeEnglish, setTypeEnglish] = useState([
        {value:0, label: "All Type"}
    ])

    const getLocation = async () => {
        await $axios.get('/karir-lokasi')
        .then((res) => {
            let thisData = res.data.data
            thisData.length > 0 &&
            thisData.forEach((item) => {
                setLocation((prev) =>
                    prev ? [...prev, {value:item.id, label:item.nama}] : [{value:item.id, label:item.nama}]
                )
            })            
        })
    }

    const getType = async () => {
        await $axios.get('/karir-jenis')
        .then((res) => {
            let thisData = res.data.data
            thisData.length > 0 &&
            thisData.forEach((item) => {
                setTypeIndo((prev) =>
                    prev ? [...prev, {value:item.id, label:item.nama}] : [{value:item.id, label:item.nama}]
                )
                setTypeEnglish((prev) =>
                    prev ? [...prev, {value:item.id, label:item.name_eng}] : [{value:item.id, label:item.name_eng}]
                )
            })            
        })
    }

    const ADD_CAREER_DATA = async (type = "RESET", data = {id_lokasi:0, id_jenis:0, posisi:"programmer"}) => {
        setIsProcessing(true)
        if(type === "RESET"){
            await $axios.get('/karir')
            .then(res => {
                let thisData = res.data.data
                console.log(thisData)
                dispatch(setCareerData(thisData))
            })
            setIsProcessing(false)
        }
        if(type === "FILTER"){
            await $axios.post('/karir-cari', data)
            .then(res => {
                let thisData = res.data.data
                console.log(res)
                if(thisData.length > 0)
                    dispatch(setCareerData(thisData))
                else
                    dispatch(setCareerData(false))
            })
            setIsProcessing(false)
        }
    }

    useEffect(() => {
        getLocation()
        getType()
    },[])

    return { location, typeIndo, typeEnglish, isProcessing, ADD_CAREER_DATA}

}