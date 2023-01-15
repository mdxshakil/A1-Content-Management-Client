import React from 'react'
import { NavLink } from 'react-router-dom'

const SideNav = () => {
    return (
        <nav className="sidenav-container">
            <ul>
                <li>
                    <NavLink activeclassname="active" to={'/dashboard'}>Add Content</NavLink>
                </li>
                <li>
                    <NavLink activeclassname="active" to={'/dashboard/managecontent'}>Manage Content</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default SideNav