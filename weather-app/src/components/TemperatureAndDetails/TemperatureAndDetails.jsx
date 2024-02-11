import React from 'react'

// Importing Icons
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons";

const TemperatureAndDetails = () => {
    return (
        <>
            {/* Current Weather */}
            <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
                <p>Clear</p>
            </div>

            {/* Temperature */}
            <div className="flex flex-row items-center justify-evenly text-white py-3">
                {/* Temp Icon */}
                <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className="w-20" />
                {/* Temp */}
                <p className="text-5xl">34°C</p>
                {/* Temp details */}
                <div className="flex flex-col space-y-2">
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTemperature size={18} className="mr-1" />
                        Real feel:
                        <span className="font-medium ml-1">33°C</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTear size={18} className="mr-1" />
                        Humidity:
                        <span className="font-medium ml-1">18%</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilWind size={18} className="mr-1" />
                        Wind:
                        <span className="font-medium ml-1">22 km/h</span>
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
                        04:50 AM
                    </span>
                </p>
                <p className="font-light">|</p>
                {/* Sunset */}
                <UilSunset />
                <p className="font-light">
                    Set:{" "}
                    <span className="font-medium ml-1">
                        09:00 PM
                    </span>
                </p>
                <p className="font-light">|</p>
                {/* Temp High */}
                <UilSun />
                <p className="font-light">
                    High:{" "}
                    <span className="font-medium ml-1">
                        21 °C
                    </span>
                </p>
                <p className="font-light">|</p>
                {/* Temp Low */}
                <UilSun />
                <p className="font-light">
                    Low:{" "}
                    <span className="font-medium ml-1">
                        11 °C
                    </span>
                </p>
            </div>
        </>
    )
}

export default TemperatureAndDetails