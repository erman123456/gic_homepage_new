import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import Layout from '../../../components/layouts';
import BreadCrumbsComponent from '../../../components/moleculs/BreadCrumbs';
import { $axios } from '../../../config/Axios';
import BreadcrumbRoutes from '../../../config/BreadCrumb';
import CareerDetailHeader from '../../organisms/CareerDetailHeader';
import CareerDetailInformation from '../../organisms/CareerDetailInformation';

const CareerDetail = ({breadcrumbs,...props}) => {
    const [data,setData] = useState()

    useEffect(() => {
        async function fetchData(){
            await $axios.get(`karir-detail-${props.match.params.id}`)
            .then((res) => {
                setData(...res.data.data)
            })
        }
        fetchData()
    },[])
    return (
        <Layout>
            <CareerDetailHeader data={data} breadcrumb={<BreadCrumbsComponent breadcrumbs={breadcrumbs} activePage="Career Detail" />} />
            <CareerDetailInformation data={data} />
        </Layout>
    )
}



export default withBreadcrumbs(BreadcrumbRoutes)(CareerDetail)
