import React, { useState } from 'react';

// Importing Icons
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

const Inputs = ({ setQuery, units, setUnits }) => {
    // Set city state
    const [city, setCity] = useState("");

    const handleSearchClick = () => {
        if (city !== "") setQuery({ q: city });
    };

    const handleCurrLocationClick = () => {
        try {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    let lat = position.coords.latitude;
                    let lon = position.coords.longitude;

                    console.log(lat, lon);

                    setQuery({
                        lat,
                        lon,
                    });
                });
            }
        } catch (error) {
            console.log("Error getting current location:", error);
        }
    };

    const handleUnitsChange = (e) => {
        const selectedUnit = e.currentTarget.name;
        if (units !== selectedUnit) setUnits(selectedUnit);
    };

    return (
        <>
            <div className="flex flex-row justify-center my-6">
                {/* Input field */}
                <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Search for city...."
                        className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                handleSearchClick();
                            }
                        }}
                    />
                    <UilSearch
                        size={25}
                        className="text-white cursor-pointer transition ease-out hover:scale-125"
                        onClick={handleSearchClick}
                    />
                    <UilLocationPoint
                        size={25}
                        className="text-white cursor-pointer transition ease-out hover:scale-125"
                        onClick={handleCurrLocationClick}
                    />
                </div>

                {/* Icons */}
                <div className="flex flex-row w-1/4 items-center justify-center">
                    <button
                        name="metric"
                        className={`text-xl text-white font-light transition ease-out hover:scale-125 ${units === 'metric' ? 'text-blue-300' : ''}`}
                        onClick={handleUnitsChange}
                    >
                        °C
                    </button>
                    <p className="text-xl text-white mx-1">|</p>
                    <button
                        name="imperial"
                        className={`text-xl text-white font-light transition ease-out hover:scale-125 ${units === 'imperial' ? 'text-blue-300' : ''}`}
                        onClick={handleUnitsChange}
                    >
                        °F
                    </button>
                </div>
            </div>
        </>
    )
}

export default Inputs