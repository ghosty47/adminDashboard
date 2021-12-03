import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topleft">
                    <span className="logo">Dashboard</span>
                </div>
                <div className="topright">
                    <div className="tobarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="tobarIconContainer">
                        <Language/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="tobarIconContainer">
                        <Settings/>
                    </div>
                    <img src="https://images.pexels.com/photos/7754885/pexels-photo-7754885.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default Topbar
