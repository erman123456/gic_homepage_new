import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Shimmer = (props) => {
    return (
        <SkeletonTheme color="#ccc" highlightColor="#fff">
            <p>
                <Skeleton height={props.height} count={props.count} />
            </p>
        </SkeletonTheme>
    )
}

export default Shimmer
