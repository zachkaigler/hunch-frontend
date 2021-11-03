import React from 'react'

const AnswerOptionCard = ({ id, label, setQuestionAnswerOpts, questionAnswerOpts }) => {
    return (
        <div className="answer-option">
            <span className="delete" onClick={() => {
                setQuestionAnswerOpts(questionAnswerOpts.filter(opt => opt.id !== id))
            }}>X</span>
            <p>{label}</p>
        </div>
    )
}

export default AnswerOptionCard
