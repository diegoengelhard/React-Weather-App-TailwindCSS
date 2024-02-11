const API_KEY = 'f699a6cf1de562c7b14eadabe6723ac5';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

// Gets raw weather data from the OpenWeatherMap API
const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

    return fetch(url).then((res) => res.json());
};

/*
    The following JSON object is an example of the data returned from OpenWeatherMap API.

    {
    - coord: {
        lon: 139.6917,
        lat: 35.6895
    },
    - weather: [
        - {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n"
        }
    ],
    base: "stations",
    - main: {
        temp: 293.24,
        feels like: 293.47,
        temp_min: 292.34,
        temp_max: 294.05,
        pressure: 1005,
        humidity: 83
    },
    visibility: 10000,
    - wind: {
        speed: 6.17,
        deg: 60
    },
    - clouds: {
    all: 75
    },
    dt: 1663999026,
    - sys: {
        type: 2,
        id: 2038398,
        country: "JP",
        sunrise: 1653938846,
        sunset: 1653990636
    },
    timezone: 32400,
    id: 1850144,
    name: "Tokyo",
    cod: 200
}
*/

//  Formats the raw weather data into a more readable format
const formatCurrentWeather = (data) => {
    // Desctructuring the data object
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed },
    } = data;

    const { main: details, icon } = weather[0];

    return {
        lat,
        lon,
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        name,
        dt,
        country,
        sunrise,
        sunset,
        details,
        icon,
        speed,
    };
};

/*
    The following JSON object is an example of the forecast data returned from OpenWeatherMap API.

    lat: 48.8534,
    lon: 2.3488,
    timezone: "Europe/Paris",
    timezone_offset: 7200,
    - hourly: [
        - {
            dt: 1653998400,
            temp: 20.27,
            feels like: 19.34,
            pressure: 1013,
            humidity: 38,
            dew_point: 5.51,
            uvi: 5.57,
            clouds: 0,
            visibility: 10000,
            wind_speed: 2.92,
            wind_deg: 255,
            wind_gust: 4.85,
            - weather: [
                {
                    id: 800,
                    main: "Clear",
                    description: "clear sky",
                    icon: "01d"
                }
            ],
        pop: 0
    },
    - {
        dt: 1654002000,
        temp: 20.24,
        feels like: 19.26,
        pressure: 1013,
        humidity: 36,
        dew_point: 4.7,
        uvi: 3,
        clouds: 20,
        visibility: 10000,
        wind_speed: 4.17,
        wind_deg: 274,
        wind_gust: 5.32,
        - weather: [
        id: 801,
        main: "Clouds",
        description: "few clouds",
        icon: "02d"
        }
    ],
    pop: 0.04
*/

// Formats the raw forecast data into a more readable format
const formatForecastWeather = (data) => {
    let { timezone, daily, hourly } = data;
    daily = daily.slice(1, 6).map((d) => {
        return {
            title: formatToLocalTime(d.dt, timezone, "ccc"),
            temp: d.temp.day,
            icon: d.weather[0].icon,
        };
    });

    hourly = hourly.slice(1, 6).map((d) => {
        return {
            title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
            temp: d.temp,
            icon: d.weather[0].icon,
        };
    });

    return { timezone, daily, hourly };
};

// Obtains the formatted weather data from the API
const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData(
        "weather",
        searchParams
    ).then(formatCurrentWeather);

    const { lat, lon } = formattedCurrentWeather;

    const formattedForecastWeather = await getWeatherData("onecall", {
        lat,
        lon,
        exclude: "current,minutely,alerts",
        units: searchParams.units,
    }).then(formatForecastWeather);

    return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

// Formats time from seconds to a human-readable format
const formatToLocalTime = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

// Obtains weather icon URL from the weather code
const iconUrlFromCode = (code) =>
    `http://openweathermap.org/img/wn/${code}@2x.png`;

export { formatToLocalTime, iconUrlFromCode };