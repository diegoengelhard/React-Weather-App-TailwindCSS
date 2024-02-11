import React from 'react'

const Forecast = ({title}) => {
    return (
        <>
            {/* Title */}
            <div className="flex items-center justify-start mt-6">
                <p className="text-white font-medium uppercase">{title}</p>
            </div>
            <hr className="my-2" />

            {/* Forecast */}
            <div className="flex flex-row items-center justify-between text-white">
                {/* TODO: LOOP THROUGH WEATHER ITEMS */}
            </div>
        </>
    )
}

export default Forecast