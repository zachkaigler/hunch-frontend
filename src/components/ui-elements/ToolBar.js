import React from 'react'

const ToolBar = ({ actions }) => {
    const links = actions.map(a => <p>{a}</p>)

    return (
        <div className="toolbar">
            {links}
        </div>
    )
}

export default ToolBar
