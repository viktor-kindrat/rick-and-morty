import "./Style/HeadlineGroup.css"

function HeadlineGroup({headline, subheadline}) {
    return (
        <div className="Headline-Group">
            <h2 className="Headline-item">{headline}</h2>
            <span className="Subheadline-item">{subheadline}</span>
        </div>
    )
}

export default HeadlineGroup