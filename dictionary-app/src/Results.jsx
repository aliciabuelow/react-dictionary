import Meanings from "./Meanings"

export default function Results(props) {
    if (props.data) {
    return (
        <div>
        <h2 className="mt-4 word">{props.data.word}</h2>
        <div className="phonetic">/{props.data.phonetic}/</div>
        {props.data.meanings.map(function (meaning, index) {
            return (
                <div key={index}>
                    <Meanings meaning={meaning} />
                </div>
            )
        })}
        </div>
    ) } else {
        return null;
    }
}