import React from 'react'
import { FadeLoader } from 'react-spinners'

const LoadingSpinner = () => {
    return (
        <>
            <div className='jusify-center items-center'>
                <FadeLoader color="#ffffff" />
            </div>
        </>
    )
}

export default LoadingSpinner