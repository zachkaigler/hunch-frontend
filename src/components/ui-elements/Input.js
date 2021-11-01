import React from 'react'

const Input = ({ value, placeholder="", setter, error, maxLength=null }) => {
    return (
        <div className="fluid-container">
            <div className="error-container">
                { error ? <p className="error">{error}</p> : null }
            </div>
            <input 
                className={`hunch-input ${error ? "error" : "" }`}
                value={value}
                placeholder={placeholder}
                maxLength={maxLength}
                onChange={e => setter(e.target.value)}
            />
        </div>
    )
}

export default Input
