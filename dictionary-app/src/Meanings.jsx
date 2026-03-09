import "./Meanings.css"
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meanings(props) {
    return (
        <div className="Meanings">
            <strong>{props.meaning.partOfSpeech}</strong>
            <div>
                {props.meaning.definition}
                <Example example={props.meaning.example} />
                <em>
                <Synonyms synonyms={props.meaning.synonyms} />
                </em>
            </div>
            </div>
        )
}