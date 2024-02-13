// Sets the temperature unit based on the units passed
export function getTemperatureUnit(units) {
    return units === "metric" ? "C" : "F";
}