import React from 'react'
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import Layout from '../../../components/layouts';
import BreadcrumbRoutes from '../../../config/BreadCrumb';
import TermsAndCondtion from '../../organisms/TermsAndCondition';

const TermsCondition = ({breadcrumbs}) => {
    const metaContent = `Terms & Condition GIC`
    return (
        <Layout breadcrumbs={breadcrumbs} activePage="Terms & Condition" metaContent={metaContent}>
            <TermsAndCondtion />
        </Layout>
    )
}

export default withBreadcrumbs(BreadcrumbRoutes)(TermsCondition)
