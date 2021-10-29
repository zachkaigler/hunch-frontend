import React from 'react'
import logo from '../../images/hunch-logo.png'
import NavMenu from './NavMenu'
// import profileIcon from '../../images/icon-profile.png'

const Nav = () => {
    return (
        <div className="nav">
            <img src={logo} alt="hunch-logo" id="nav-logo"/>
            <div className="nav-right">
                <h2>username</h2>
                <NavMenu />
                {/* <img src={profileIcon} alt="profile-icon" id="nav-profile-icon"/> */}
            </div>
        </div>
    )
}

export default Nav
