import React from 'react'
import Layout from '../../../components/layouts'
import UnderDeveloping from '../../organisms/UnderDevelop'

const UnderDevelop = () => {
    const metaContent = `Ooppss!! Halaman sedang dalam pengerjaan..`
    return (
        <Layout metaContent={metaContent} activePage="Under Developing">
            <UnderDeveloping />
        </Layout>
    )
}

export default UnderDevelop
