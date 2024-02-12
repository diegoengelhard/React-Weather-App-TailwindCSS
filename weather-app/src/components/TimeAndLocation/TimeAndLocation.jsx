import React from 'react'
import { formatToLocalTime } from '../../services/weather.service';

const TimeAndLocation = ({ date, timezone, city, country }) => {

    return (
        <>
            <div>
                <div className="flex items-center justify-center my-6">
                    <p className="text-white text-xl font-extralight">
                        {formatToLocalTime(date, timezone)}
                    </p>
                </div>

                <div className="flex items-center justify-center my-3">
                    <p className="text-white text-3xl font-medium">
                        {city}, {country}
                    </p>
                </div>
            </div>
        </>
    )
}

export default TimeAndLocation