import "./Meanings.css"

export default function Meanings(props) {
    if (props.meaning.example) {
    return (
        <div className="Meanings">
            <strong>{props.meaning.partOfSpeech}</strong>
            <p>
                {props.meaning.definition}
                <br />
                <em>ex. "{props.meaning.example}"</em>
            </p>
        </div>
    ) } else {
        return (
            <div className="Meanings">
            <strong>{props.meaning.partOfSpeech}</strong>
            <p>
                {props.meaning.definition}
                <br />
            </p>
        </div>
        )
    }
}