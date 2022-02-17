export function toCelsius(fahreenheit) {
    return (fahreenheit - 32) * 5 / 9
}


export function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

export function convert(temprature, convert) {
    const input = parseFloat(temprature)
    if (Number.isNaN(input)) {

        return ''
    }
    const output = convert(input)

    const roundNumber = Math.round(output * 1000) / 1000;
    return roundNumber.toString();
}