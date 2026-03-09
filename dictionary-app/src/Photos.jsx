import './Photos.css'

export default function Photos(props) {
    if (props.photos) {
    return (
        <div className="Photos">
        <div className="row">
            {props.photos.photos.map((photo, index) => {
                return (
                    <div className="col-4" key={index}>
                    <a href={photo.url} target="_blank">
                        <img src={photo.src.landscape} alt={photo.alt} className="img-fluid" />
                    </a>
                    </div>
                )
            })}
        </div>
        </div>
    );
} 
}