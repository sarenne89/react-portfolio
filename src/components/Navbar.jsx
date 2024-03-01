import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand display-1 p-3" href="#">Matt Dunmore // Web Developer</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav float-end">
                        <li className="nav-item">
                            <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                Home
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="about" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                About Me
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="skills" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                Skills
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="work" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                Work
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="resume" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                Resume
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="contact" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                Contact
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <a href="http://github.com/sarenne89" class="nav-link">GitHub</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar