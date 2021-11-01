import React from 'react'

const TextArea = ({ value, placeholder="", setter, error, maxLength=null, questionPrompt=false }) => {
    return (
        <div className="fluid-container">
            <div className="error-container">
                { error ? <p className="error">{error}</p> : null }
            </div>
            <textarea 
                className={`hunch-textarea ${error ? "error" : "" } ${questionPrompt ? "question" : ""}`}
                value={value}
                placeholder={placeholder}
                maxLength={maxLength}
                onChange={e => setter(e.target.value)}
            />
        </div>
    )
}

export default TextArea
