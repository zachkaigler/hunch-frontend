import React, { useState } from 'react'
import { useHistory } from 'react-router'
import linear from "../../images/tile-icon-survey-type-linear-grey.png"
import Button from '../ui-elements/Button'
import Input from '../ui-elements/Input'
import TextArea from '../ui-elements/TextArea'

const CreateSurvey = () => {
    const history = useHistory()

    // Track current page
    const [currentPage, setCurrentPage] = useState('surveyType')

    // Validation error handling
    const [error, setError] = useState(null)

    // State variables for answers
    const [surveyType, setSurveyType] = useState(null)
    const [surveyName, setSurveyName] = useState("")
    const [surveyDesc, setSurveyDesc] = useState("")

    const survey = {
        type: surveyType,
        name: surveyName,
        desc: surveyDesc,
    }

    console.log("Current survey state: ", survey)

    const pages = {
        surveyType:
            {
                content: 
                    <>
                        <h1>Choose survey type</h1>
                        <div className="tile-container">
                            <div className={`dashboard-tile grey`} onClick={() => {
                                setSurveyType("linear")
                                setCurrentPage("nameSurvey")
                            }}>
                                <h2>Linear</h2>
                                <p>Questions always follow the same order</p> 
                                <img src={linear} alt={linear} className="dashboard-tile-icon"/>
                            </div>
                        </div>
                    </>,
                prevPg: null,
                nextPg: "nameSurvey",
                state: surveyType
            },
        nameSurvey: 
           {
               content: 
                    <>
                        <h1>Name your survey</h1>
                        <Input
                            value={surveyName}
                            setter={setSurveyName}
                            maxLength={100}
                            error={error}
                        />
                    </>,
                prevPg: "surveyType",
                nextPg: "describeSurvey",
                state: surveyName
           },
        describeSurvey:
           {
               content:
                    <>
                        <h1>Describe it to your users</h1>
                        <TextArea
                            value={surveyDesc}
                            setter={setSurveyDesc}
                            maxLength={1000}
                            error={error}
                        />
                    </>,
                prevPg: "nameSurvey",
                nextPg: "createQuestion",
                state: surveyDesc
           }
    }

    const parseError = (pageState) => {
        switch (pageState) {
            case "nameSurvey":
                return "Surveys must be named."
            case "describeSurvey":
                return "Surveys must have a description."
            default:
                return null
        }
    }

    return (
        <div className="main">
            <div className="content create-survey">
                {pages[currentPage].content}
                <div className="create-survey-button-container">
                    {/* TODO: Add in save draft modal + functionality */}
                    <Button 
                        content="Cancel"
                        color="red"
                        handleClick={() => {
                            setSurveyType(null)
                            setSurveyName("")
                            setSurveyDesc("")
                            history.push("/dashboard")
                        }}
                    />
                    <div className="buttons-right">
                        { currentPage !== "surveyType" ?
                            <>
                                <Button 
                                    content="Previous"
                                    color="grey"
                                    handleClick={() => setCurrentPage(pages[currentPage].prevPg)}
                                />
                                <Button 
                                    content="Next"
                                    color="green"
                                    handleClick={() => {
                                        if (pages[currentPage].state === "") {
                                            setError(parseError(currentPage))
                                        } else {
                                            setError(null)
                                            setCurrentPage(pages[currentPage].nextPg)
                                        }
                                    }}
                                />
                            </>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateSurvey
