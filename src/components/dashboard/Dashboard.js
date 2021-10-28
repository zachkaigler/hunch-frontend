import React from 'react'
import DashboardTile from './DashboardTile'
import { dashboardTileData } from "./dashboardTileData"

const Dashboard = () => {

    const tiles = dashboardTileData.map((tile) => {
        return <DashboardTile 
                key={tile.id}
                color={tile.color}
                label={tile.label}
                icon={tile.icon}
              />
    })

    return (
        <div className="dashboard">
            <div className="content">
                <h1>Dashboard</h1>
                <div className="tile-container">
                    {tiles}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
