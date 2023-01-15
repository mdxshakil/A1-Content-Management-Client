import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink activeclassname="active" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink activeclassname="active" to="/readinghistory">Reading History</NavLink>
                </li>
                <li>
                    <NavLink activeclassname="active" to="/dashboard">Dashboard</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar