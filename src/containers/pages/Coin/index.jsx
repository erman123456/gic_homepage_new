import React from 'react'
import Layout from '../../../components/layouts'
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import BreadcrumbRoutes from '../../../config/BreadCrumb';
import GictCoinBenefits from '../../organisms/GictCoinBenefits'
import GictCoinGreeting from '../../organisms/GictCoinGreeting'
import MarketSize from '../../organisms/MarketSize'
import SolvedProblems from '../../organisms/SolvedProblems'


const Coin = ({breadcrumbs}) => {
    const metaContent = `GICT adalah aset kripto atau mata uang digital yang digunakan untuk bertransaksi, dan melakukan trading forex di GIC. GICT dapat ditransaksikan di Primadax Exchange.`
    return (
        <Layout breadcrumbs={breadcrumbs} activePage="GICT Coin" metaContent={metaContent}>
            <GictCoinGreeting />
            <SolvedProblems />
            <GictCoinBenefits />
            <MarketSize />
        </Layout>
    )
}

export default withBreadcrumbs(BreadcrumbRoutes)(Coin)
