import React, { useState } from 'react'
import { useHistory } from 'react-router'
import linear from "../../images/tile-icon-survey-type-linear-grey.png"
import Button from '../ui-elements/Button'
import Input from '../ui-elements/Input'
import SectionHeader from '../ui-elements/SectionHeader'
import TextArea from '../ui-elements/TextArea'
import { Radio, RadioGroup, FormControl, FormControlLabel } from '@mui/material'
import AnswerOptionCard from './AnswerOptionCard'
import { v4 as uuidv4 } from 'uuid';

const CreateSurvey = () => {
    const history = useHistory()

    // Track current page
    const [currentPage, setCurrentPage] = useState('surveyType')

    // Validation error handling
    const [error, setError] = useState(null)

    // State variables for user input
    const [surveyType, setSurveyType] = useState(null)
    const [surveyName, setSurveyName] = useState("")
    const [surveyDesc, setSurveyDesc] = useState("")
    const [currentQuestion, setCurrentQuestion] = useState(1)
    const [allQuestions, setAllQuestions] = useState([])
    const [questionType, setQuestionType] = useState("multiChoice1")
    const [questionPrompt, setQuestionPrompt] = useState("")
    const [questionAnswerOpts, setQuestionAnswerOpts] = useState([])
    const [answerLabel, setAnswerLabel] = useState("")
    const [goodbyeMsg, setGoodbyeMsg] = useState("")

    const [addAnother, setAddAnother] = useState("yes")

    const survey = {
        type: surveyType,
        name: surveyName,
        desc: surveyDesc,
        questions: allQuestions,
        goodbyeMsg: goodbyeMsg
    }

    const answerOptCards = questionAnswerOpts.map(opt => {
        return <AnswerOptionCard
                key={opt.id}
                id={opt.id}
                label={opt.label}
                setQuestionAnswerOpts={setQuestionAnswerOpts}
                questionAnswerOpts={questionAnswerOpts}
              />
    })

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
           },
        createQuestion:
           {
               content:
                    <>
                        <h1>Question {currentQuestion}</h1>
                        <div className="inner-container">
                            <SectionHeader text="Type" />
                            <FormControl component="fieldset">
                                <RadioGroup row 
                                            aria-label="question-type"
                                            name="question-type"
                                            value={questionType} 
                                            onChange={(e) => setQuestionType(e.target.value)}>
                                    <FormControlLabel value="multiChoice1" control={<Radio />} label="Multiple choice (select one)" />
                                    <FormControlLabel value="multiChoice2" control={<Radio />} label="Multiple choice (select several)" />
                                    <FormControlLabel value="userInputAnswer" control={<Radio />} label="User input (answer)" />
                                    <FormControlLabel value="userInputEmail" control={<Radio />} label="User input (email)" />
                                </RadioGroup>
                            </FormControl>
                            <SectionHeader text="Prompt" />
                            <TextArea 
                                value={questionPrompt}
                                setter={setQuestionPrompt}
                                maxLength={250}
                                error={error}
                                questionPrompt={true}
                            />
                        </div>
                    </>,
                prevPg: "describeSurvey",
                nextPg: questionType === "multiChoice1" || questionType === "multiChoice2" ? "createAnswerOpts" : currentQuestion < allQuestions.length ? "createQuestion" : "addAnotherQuestion",
                state: questionPrompt
           },
        createAnswerOpts:
            {
                content:
                    <>
                        <h1>Question {currentQuestion}</h1>
                        <div className="inner-container">
                            <SectionHeader text="Answer options"/>
                            <Input 
                                value={answerLabel}
                                setter={setAnswerLabel}
                                maxLength={100}
                                error={error}
                                questionPrompt={true}
                                keyDownEnter={true}
                            />
                            {/* TODO: add this functionality to input on enter keystroke*/}
                            <div className="add-answer">
                                <span onClick={() => {
                                    if (answerLabel === "") {
                                        setError("Answer labels cannot be blank.")
                                    } else {
                                        setError("")
                                        setQuestionAnswerOpts([...questionAnswerOpts, {
                                            id: uuidv4(),
                                            question_id: currentQuestion,
                                            label: answerLabel
                                        }])
                                        setAnswerLabel("")
                                    }
                                }}>Add</span>
                            </div>
                            <div className="answers-container">
                                {answerOptCards}
                            </div>
                        </div>
                    </>,
                    prevPg: "createQuestion",
                    nextPg: (currentQuestion < allQuestions.length) && (questionType !== "multiChoice1" || questionType !== "multiChoice2") ? "createQuestion" : "addAnotherQuestion",
                    state: answerLabel
            },
        addAnotherQuestion:
           {
                content:
                    <>
                        <h1>Add another question?</h1>
                        <FormControl component="fieldset">
                                <RadioGroup row 
                                            aria-label="add-another"
                                            name="add-another"
                                            value={addAnother} 
                                            onChange={(e) => setAddAnother(e.target.value)}>
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                        </FormControl>
                    </>,
                prevPg: "createQuestion",
                nextPg: addAnother === "yes" ? "createQuestion" : "createGoodbye",
                state: addAnother
           },
        createGoodbye:
           {
            content:
            <>
                <h1>Write a thank you message</h1>
                <TextArea 
                    value={goodbyeMsg}
                    setter={setGoodbyeMsg}
                    maxLength={500}
                    error={error}
                />
            </>,
        prevPg: "addAnotherQuestion",
        nextPg: null,
        state: addAnother
           }
    }

    const parseError = (pageState) => {
        switch (pageState) {
            case "nameSurvey":
                return "Surveys must be named."
            case "describeSurvey":
                return "Surveys must have a description."
            case "createQuestion":
                return "Questions must have a prompt."
            case "createAnswerOpts":
                return "Multiple choice questions must have at least two answers."
            case "goodbyeMsg":
                return "Please write a thank you message."
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
                                {/* "previous" button functionality */}
                                <Button 
                                    content="Previous"
                                    color="grey"
                                    handleClick={() => {
                                        // if we click previous on create question page any time after the first question, or if we're on the add another question page
                                        // after the first question and click previous, we decriment the currentQuestion by 1 and find the values for each part of the previous
                                        // question to update into state and rerender createQuestion with those values
                                        if (currentPage === "createQuestion" && currentQuestion > 1) {
                                            setError(null)
                                            setCurrentQuestion(currentQuestion - 1)
                                            setQuestionType(allQuestions.find((q) => q.id === currentQuestion - 1).type)
                                            setQuestionPrompt(allQuestions.find((q) => q.id === currentQuestion - 1).prompt)
                                            setQuestionAnswerOpts(allQuestions.find((q) => q.id === currentQuestion - 1).answers)
                                            setCurrentPage("createQuestion")
                                        } else {
                                            // otherwise we just go to whatever the previous page is supposed to be
                                            setError(null)
                                            setCurrentPage(pages[currentPage].prevPg)
                                        }
                                    }}
                                />
                                {/* "next" button functionality */}
                                <Button 
                                    content={ currentPage === "createGoodbye" ? "Finish" : "Next"}
                                    color="green"
                                    handleClick={() => {
                                        if (currentPage === "createGoodbye") {
                                            // TODO: add post to database, push to survey's page
                                            console.log("Submitted survey: ", survey)
                                            history.push("/dashboard")
                                        } else {
                                            if ((currentPage !== "createAnswerOpts" && pages[currentPage].state === "") || (currentPage === "createAnswerOpts" && questionAnswerOpts.length < 2)) {
                                                // Error handling
                                                setError(parseError(currentPage))
                                            } else {
                                                setError(null)
                                                
                                                // If the current question number matches an ID of a question already added to survey,
                                                // update that question
                                                if (allQuestions.length !== 0 && allQuestions.find((q) => q.id === currentQuestion)) {
                                                    setAllQuestions(allQuestions.map(q => {
                                                        if (q.id === currentQuestion) {
                                                            return {
                                                                id: currentQuestion,
                                                                type: questionType,
                                                                prompt: questionPrompt,
                                                                answers: questionAnswerOpts
                                                            }
                                                        } else {
                                                            return q
                                                        }
                                                    }))
                                                // otherwise, add a new question to the end of the array
                                                } else {
                                                    setAllQuestions([...allQuestions, {
                                                        id: currentQuestion,
                                                        type: questionType,
                                                        prompt: questionPrompt,
                                                        answers: questionAnswerOpts
                                                    }])
                                                }
                                                
                                                // Increment question counter and reset fields if we're adding another question
                                                if (currentPage === "addAnotherQuestion" && addAnother === "yes") {
                                                    setCurrentQuestion(currentQuestion + 1)
                                                    setQuestionType("multiChoice1")
                                                    setQuestionPrompt("")
                                                    setQuestionAnswerOpts([])
                                                // or if we're currently creating answer options and we're not on the last created question,
                                                // increment the question by 1 and then find that question's values
                                                } else if ((currentPage === "createAnswerOpts" || currentPage === "createQuestion") && currentQuestion < allQuestions.length) {
                                                    setCurrentQuestion(currentQuestion + 1)
                                                    setQuestionType(allQuestions.find((q) => q.id === currentQuestion + 1).type)
                                                    setQuestionPrompt(allQuestions.find((q) => q.id === currentQuestion + 1).prompt)
                                                    setQuestionAnswerOpts(allQuestions.find((q) => q.id === currentQuestion + 1).answers)
                                                } 

                                                // Trigger next page
                                                setAnswerLabel("")
                                                setCurrentPage(pages[currentPage].nextPg)
                                            }
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
