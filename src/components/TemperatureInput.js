
const scaleName = {
    c: "Celsius",
    f: 'Fahrenheit'
}

export default function TemperatureInput({ scale, temprature, onChangeHandler }) {
    return (
        <fieldset>
            <legend> Temprature to {scaleName[scale]}</legend>
            <input type="text" name="temprature" value={temprature} onChange={(e) => onChangeHandler(e, scale)} />
        </fieldset>
    )
}