import React from 'react'
import { NavLink } from 'react-router-dom';
import "../styles/Navbar.css"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand display-1 p-3" href="#">Matt Dunmore // Web Developer</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav float-end">
                        <li className="nav-item">
                            <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="about" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                About Me
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="skills" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                Skills
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="work" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                Work
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="resume" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                Resume
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="contact" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink target="_blank" to="https://github.com/sarenne89" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                Github
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar