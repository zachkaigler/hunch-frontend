import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import profileIcon from '../../images/icon-profile.png'

const NavMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <div className="nav-menu">
            <img src={profileIcon} alt="profile-icon" id="nav-profile-icon" onClick={handleClick}/>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}><span className="nav-menu-item">Dashboard</span></MenuItem>
                <MenuItem onClick={handleClose}><span className="nav-menu-item">Account Settings</span></MenuItem>
                <MenuItem onClick={handleClose}><span className="nav-menu-item">Log Out</span></MenuItem>
            </Menu>
        </div>
    )
}

export default NavMenu
