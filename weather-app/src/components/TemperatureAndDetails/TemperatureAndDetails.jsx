import React from 'react'

// Import service
import { formatToLocalTime, iconUrlFromCode } from '../../services/weather.service'

// Import set unit
import { getTemperatureUnit } from '../../utils/setUnit'

// Importing Icons
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons";

const TemperatureAndDetails = ({
    details,
    icon,
    temp,
    feels_like,
    humidity,
    speedWind,
    sunrise,
    sunset,
    timezone,
    temp_min,
    temp_max,
    units
}) => {

    return (
        <>
            {/* Current Weather */}
            <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
                {details}
            </div>

            {/* Temperature */}
            <div className="flex flex-row items-center justify-evenly text-white py-3">
                {/* Temp Icon */}
                <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
                {/* Temp */}
                <p className="text-5xl">
                    {`${temp.toFixed()}°`} {getTemperatureUnit(units)}
                </p>

                {/* Temp details */}
                <div className="flex flex-col space-y-2">
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTemperature size={18} className="mr-1" />
                        Real feel:
                        <span className="font-medium ml-1">
                            {`${feels_like.toFixed()}°`} {getTemperatureUnit(units)}
                        </span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTear size={18} className="mr-1" />
                        Humidity:
                        <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilWind size={18} className="mr-1" />
                        Wind:
                        <span className="font-medium ml-1">{`${speedWind.toFixed()} km/h`}</span>
                    </div>
                </div>
            </div>

            {/* Day Details */}
            <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
                {/* Sunrise */}
                <UilSun />
                <p className="font-light">
                    Rise:{" "}
                    <span className="font-medium ml-1">
                        {formatToLocalTime(sunrise, timezone, "hh:mm a")}
                    </span>
                </p>
                <p className="font-light">|</p>
                {/* Sunset */}
                <UilSunset />
                <p className="font-light">
                    Set:{" "}
                    <span className="font-medium ml-1">
                        {formatToLocalTime(sunset, timezone, "hh:mm a")}
                    </span>
                </p>
                <p className="font-light">|</p>
                {/* Temp High */}
                <UilSun />
                <p className="font-light">
                    High:{" "}
                    <span className="font-medium ml-1">
                        {`${temp_max.toFixed()}°`} {getTemperatureUnit(units)}
                    </span>
                </p>
                <p className="font-light">|</p>
                {/* Temp Low */}
                <UilSun />
                <p className="font-light">
                    Low:{" "}
                    <span className="font-medium ml-1">
                        {`${temp_min.toFixed()}°`} {getTemperatureUnit(units)}
                    </span>
                </p>
            </div>
        </>
    )
}

export default TemperatureAndDetails