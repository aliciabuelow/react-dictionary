import Meanings from "./Meanings"

export default function Results(props) {
    if (props.data) {
    return (
        <div className="Results">
            <div className="mt-4 results-heading">
        <h2 className="word">{props.data.word}</h2>
        <div className="phonetic">/{props.data.phonetic}/</div>
        </div>
        {props.data.meanings.map(function (meaning, index) {
            return (
                <div key={index}>
                    <Meanings meaning={meaning} />
                </div>
            )
        })}
        </div>
    ) } else {
        return null
    }
}