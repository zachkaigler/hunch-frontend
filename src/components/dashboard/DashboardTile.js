import React from 'react'
import { Link } from 'react-router-dom'

const DashboardTile = ({ color, label, icon, destination, desc=null }) => {
    return (
        <Link to={`/${destination}`}>
            <div className={`dashboard-tile ${color}`}>
                <h2>{label}</h2>
                { desc ? <p>{desc}</p> : null}
                <img src={icon} alt={label} className="dashboard-tile-icon"/>
            </div>
        </Link>
    )
}

export default DashboardTile
