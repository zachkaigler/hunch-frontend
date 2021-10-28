import React from 'react'

const DashboardTile = ({ color, label, icon }) => {
    return (
        <div className={`dashboard-tile ${color}`}>
            <h2>{label}</h2>
            <img src={icon} alt={label} className="dashboard-tile-icon"/>
        </div>
    )
}

export default DashboardTile
