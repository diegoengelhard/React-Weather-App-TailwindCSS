import React from 'react'

// Import set unit
import { getTemperatureUnit } from '../../utils/setUnit'

import { iconUrlFromCode } from '../../services/weather.service'

const Forecast = ({ title, items, units }) => {
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
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center"
                    >
                        <p className="font-light text-sm">{item.title}</p>
                        <img
                            src={iconUrlFromCode(item.icon)}
                            className="w-12 my-1"
                            alt=""
                        />
                        <p className="font-medium">
                            {`${item.temp.toFixed()}°`} {getTemperatureUnit(units)}
                        </p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Forecast