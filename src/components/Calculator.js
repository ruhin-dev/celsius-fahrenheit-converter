import React from "react";
import TemperatureInput from "./TemperatureInput"
import BoilingVerdict from "./BoilingVerdict"
import { toCelsius, toFahrenheit, convert } from '../lib/convert'
export default class Calculator extends React.Component {

    state = {
        temprature: '',
        scale: 'c'
    }
    stateHandler = (e, scale) => {
        this.setState({
            temprature: e.target.value,
            scale
        })
    }

    render() {
        const { temprature, scale } = this.state
        const celsius = scale === 'f' ? convert(temprature, toCelsius) : temprature
        const fahreenheit = scale === 'c' ? convert(temprature, toFahrenheit) : temprature
        return (
            <fieldset>
                <TemperatureInput scale='c' temprature={celsius} onChangeHandler={this.stateHandler} />
                <TemperatureInput scale='f' temprature={fahreenheit} onChangeHandler={this.stateHandler} />
                <BoilingVerdict temprature={temprature} />
            </fieldset>
        )
    }

}