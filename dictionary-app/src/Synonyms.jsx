export default function Synonyms(props) {
    if (props.synonyms) {
        return (
            <div className="Synonyms">
                See also:
                {props.synonyms.map(function (synonym, index) {
                    return <span key={index} className="synonym">{synonym}</span>
                })}
            </div>
        )
    }
}