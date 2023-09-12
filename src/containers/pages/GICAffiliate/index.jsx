import React from 'react'
import BreadCrumbsComponent from '../../../components/moleculs/BreadCrumbs'
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import BreadcrumbRoutes from '../../../config/BreadCrumb';
import Layout from '../../../components/layouts'
import GicAffiliateHeader from '../../organisms/GicAffiliateHeader'
import MassiveReward from '../../organisms/MassiveReward';

const GICAffiliate = ({breadcrumbs}) => {
    const metaContent = `Ikuti program affiliate dari GIC, pelajari bagaimana cara melakukannya dan apa saja keuntungan yang Anda dapatkan dari program affiliate GIC.`
    return (
        <Layout activePage="GIC Affiliate" metaContent={metaContent}>
            <GicAffiliateHeader />
            <BreadCrumbsComponent breadcrumbs={breadcrumbs} activePage="GIC Affiliate"/>
            <MassiveReward />
        </Layout>
    )
}

export default withBreadcrumbs(BreadcrumbRoutes)(GICAffiliate)
