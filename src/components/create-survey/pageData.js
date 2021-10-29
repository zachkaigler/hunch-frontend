import linear from "../../images/tile-icon-survey-type-linear-grey.png"

export const pages = {
    surveyType:
        <>
            <h1>Choose survey type</h1>
            <div className="tile-container">
                <div className={`dashboard-tile grey`}>
                    <h2>Linear</h2>
                    <p>Questions always follow the same order</p> 
                    <img src={linear} alt={linear} className="dashboard-tile-icon"/>
                </div>
            </div>
        </>,
    nameSurvey: 
        <>
            <h1>Name your survey</h1>
        </>, 
}