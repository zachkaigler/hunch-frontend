import React from 'react'

const Button = ({ content, color, handleClick, type=null }) => {
    return (
        <button 
            className={`hunch-button ${color}`}
            onClick={handleClick}
            type={ type ? type : "button" }
        >
            {content}
        </button>
    )
}

export default Button
