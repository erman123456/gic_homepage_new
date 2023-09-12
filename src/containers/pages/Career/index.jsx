import React from 'react'
import Layout from '../../../components/layouts'
import CareerHeader from '../../organisms/CareerHeader'
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import BreadcrumbRoutes from '../../../config/BreadCrumb';
import BreadCrumbsComponent from '../../../components/moleculs/BreadCrumbs';
import CareerFilter from '../../organisms/CareerFilter';
import JobVacancy from '../../organisms/JobVacancy';

const Career = ({breadcrumbs}) => {
    return (
        <Layout>
            <CareerHeader breadcrumb={<BreadCrumbsComponent breadcrumbs={breadcrumbs} activePage="Career" />} />
            <CareerFilter />
            <JobVacancy />
        </Layout>
    )
}



export default withBreadcrumbs(BreadcrumbRoutes)(Career)
