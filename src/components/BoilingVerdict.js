export default function BoilingVerdict(props) {

    if (props.temprature >= 100) {
        return <p>Water would be boiled</p>
    }
    return <p>Water would not boiled</p>

}