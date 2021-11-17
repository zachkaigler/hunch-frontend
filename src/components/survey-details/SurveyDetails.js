import React, { useEffect, useState } from 'react'
import ToolBar from '../ui-elements/ToolBar'
import QuestionStatCard from './QuestionStatCard'

const SurveyDetails = () => {
    // TODO: check mobile styling, fix charts, toolbar functionality
    const [survey, setSurvey] = useState({})
    const [responses, setResponses] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        // Dev code. TODO: replace with fetch to survey and responses tables. Make check that
        // logged in user owns this survey
        setSurvey({
            id: "11821283-ff90-484d-886c-026250928790",
            userId: "8856c424-52c8-49d0-8c92-60d065b0a9e7",
            creationDate: "10/10/21",
            deactivationDate: null,
            active: true,
            type: "linear",
            name: "Quarter 4 Customer Satisfaction Survey",
            desc: "Please answer a few short questions about your experience with us this quarter.",
            questions: [
                {
                    id: 1,
                    type: "multiChoice1",
                    prompt: "Did you purchase any products from us this quarter?",
                    answers: [
                        {
                            id: "17e707c4-03f6-45ef-bfd2-185f955a12fd",
                            question_id: 1,
                            label: "Yes"
                        },
                        {
                            id: "526224dc-21f9-429b-9de4-9f0f4da09d96",
                            question_id: 1,
                            label: "No"
                        }
                    ]
                },
                {
                    id: 2,
                    type: "multiChoice1",
                    prompt: "If so, how many products did you purchase?",
                    answers: [
                        {
                            id: "8ec4cbf6-5b5e-4bdb-8a3c-cab7797091da",
                            question_id: 2,
                            label: "1-5"
                        },
                        {
                            id: "92cdc610-c046-4b25-8f0c-b4301ddd0f2d",
                            question_id: 2,
                            label: "6-10"
                        },
                        {
                            id: "f13ed42b-623a-4503-abd3-34962641590e",
                            question_id: 2,
                            label: "11 or more"
                        },
                        {
                            id: "21bcf596-89d4-4af0-85ef-1addd96338ee",
                            question_id: 2,
                            label: "I did not purchase any products this quarter."
                        }
                    ]
                },
                {
                    id: 3,
                    type: "multiChoice1",
                    prompt: "Were you satisfied with your customer service experience?",
                    answers: [
                        {
                            id: "3e3d38e1-545a-44db-8511-1e808343d853",
                            question_id: 2,
                            label: "Yes"
                        },
                        {
                            id: "30e6944c-7c02-4d5d-9eac-27fef5cdb4ab",
                            question_id: 2,
                            label: "No"
                        },
                        {
                            id: "3a894b89-0a63-439b-bf1b-56cb01b67774",
                            question_id: 2,
                            label: "I did not purchase any products this quarter."
                        }
                    ]
                }
            ],
            goodbyeMsg: "Thank you for being a valued member of our family. Your feedback is of the highest importance to us."
        })
        setResponses([
            {
                id: "8aa972f5-745d-412d-91f1-189da51330c1",
                surveyId: "11821283-ff90-484d-886c-026250928790",
                answers: [
                    {
                        id: "b0cead0c-0e15-4540-b29d-0d4566d2c478",
                        questionId: 1,
                        answer: "Yes"
                    },
                    {
                        id: "25b813aa-a492-4a39-9c42-8b88c05405d4",
                        questionId: 2,
                        answer: "6-10"
                    },
                    {
                        id: "c94e0591-5f3e-49f0-874d-150dbc1aea18",
                        questionId: 3,
                        answer: "Yes"
                    }
                ]
            },
            {
                id: "e24568d9-e2ee-41e3-b742-cd52bed7827f",
                surveyId: "11821283-ff90-484d-886c-026250928790",
                answers: [
                    {
                        id: "b0cead0c-0e15-4540-b29d-0d4566d2c478",
                        questionId: 1,
                        answer: "No"
                    },
                    {
                        id: "25b813aa-a492-4a39-9c42-8b88c05405d4",
                        questionId: 2,
                        answer: "I did not purchase any products this quarter."
                    },
                    {
                        id: "c94e0591-5f3e-49f0-874d-150dbc1aea18",
                        questionId: 3,
                        answer: "Yes"
                    }
                ]
            },
            {
                id: "ee8195b0-dec9-428d-90fe-09ddb8f3249a",
                surveyId: "11821283-ff90-484d-886c-026250928790",
                answers: [
                    {
                        id: "b0cead0c-0e15-4540-b29d-0d4566d2c478",
                        questionId: 1,
                        answer: "Yes"
                    },
                    {
                        id: "25b813aa-a492-4a39-9c42-8b88c05405d4",
                        questionId: 2,
                        answer: "1-5"
                    },
                    {
                        id: "c94e0591-5f3e-49f0-874d-150dbc1aea18",
                        questionId: 3,
                        answer: "Yes"
                    }
                ]
            },
            {
                id: "3ba72bfc-3fdf-4dc6-968f-bce833b51c9f",
                surveyId: "11821283-ff90-484d-886c-026250928790",
                answers: [
                    {
                        id: "b0cead0c-0e15-4540-b29d-0d4566d2c478",
                        questionId: 1,
                        answer: "Yes"
                    },
                    {
                        id: "25b813aa-a492-4a39-9c42-8b88c05405d4",
                        questionId: 2,
                        answer: "1-5"
                    }
                ]
            }
        ])
        setIsLoaded(true)
    }, [])

    const calculateDays = (dateStr1, dateStr2) => {
        const date1 = new Date(dateStr1)
        const date2 = new Date(dateStr2)
        const diffInTime = date2.getTime() - date1.getTime()
        return parseInt(diffInTime / (1000 * 3600 * 24))
    }

    const calculateCompletionRate = (responsesArr, surveyObj) => {
        return responsesArr.filter(r => r.answers.length === surveyObj.questions.length).length / responsesArr.length * 100
    }

    const calculateEngagementRate = (responsesArr, surveyObj) => {
        if (surveyObj.active) {
            return responsesArr.length / calculateDays(surveyObj.creationDate, new Date().toLocaleDateString()) * 100
        } else {
            return responsesArr.length / calculateDays(surveyObj.creationDate, surveyObj.deactivationDate) * 100
        }
    }

    if (!isLoaded) {
        return (
            <div className="main">
            <div className="content survey-details">
                {/* TODO: update loading */}
                <h1>Loading</h1>
            </div>
        </div>
        )
    } else {

        const questionCards = survey.questions.map(q => {
            return <QuestionStatCard
                        key={q.id} 
                        question={q}
                        responses={responses}
                  />
        })

        return (
            <div className="main">
                <div className="content survey-details">
                    <h1>{survey.name}</h1>
                    <div className="line" />
                    {/* TODO: make toolbar links work */}
                    <ToolBar actions={["View", "Edit", "Share", "Download Results", "Follow Up"]} />
                    <div className="survey-details-content">
                        <div className="survey-details-col stats">
                            <h2>Survey Stats</h2>
                            <p><span className="label">Status:</span> {survey.active ? "Active" : "Deactivated"}</p>
                            <p><span className="label">Creation date:</span> {survey.creationDate}</p>
                            <p><span className="label">Days active:</span> {calculateDays(survey.creationDate, new Date().toLocaleDateString())}</p>
                            <p><span className="label">Total questions:</span> {survey.questions.length}</p>
                            <p><span className="label">Responses collected:</span> {responses.length}</p>
                            <p><span className="label">Completion rate:</span> {Math.round(calculateCompletionRate(responses, survey))}%</p>
                            <p><span className="label">Engagement rate:</span> {Math.round(calculateEngagementRate(responses, survey))}%</p>
                        </div>
                        <div className="survey-details-col questions">
                            {questionCards}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SurveyDetails
