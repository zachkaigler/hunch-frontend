import React from 'react'

const TextArea = ({ value, placeholder="", setter, error, maxLength=null }) => {
    return (
        <>
            <div className="error-container">
                { error ? <p className="error">{error}</p> : null }
            </div>
            <textarea 
                className={`hunch-textarea ${error ? "error" : "" }`}
                value={value}
                placeholder={placeholder}
                maxLength={maxLength}
                onChange={e => setter(e.target.value)}
            />
        </>
    )
}

export default TextArea
