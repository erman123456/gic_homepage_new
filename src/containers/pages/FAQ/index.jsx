import React from 'react';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import Layout from '../../../components/layouts';
import BreadcrumbRoutes from '../../../config/BreadCrumb';
import FaqItem from '../../organisms/FaqItem';

const FAQ = ({breadcrumbs}) => {
    const metaContent = `GIC's Frequently Asked Question`
    return (
        <Layout breadcrumbs={breadcrumbs} activePage="Frequently Asked Question" metaContent={metaContent}>
            <FaqItem />
        </Layout>
    )
}

export default withBreadcrumbs(BreadcrumbRoutes)(FAQ)
