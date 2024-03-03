import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Work.css"
const projects = require("Projects.json")

export default function Work() {
    const projectListItems = projects.map(project =>
        <li>
            <div className="card p-3 row mb-3 shadow">
                <div className="col-md-6">
                    <h5 className="display-5">{project.name}</h5>
                    <h5>Grade: {project.score}</h5>
                    <p className="lead">{project.description}</p>
                    <div>
                        <Link to={project.deployedURL} target="_blank">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                                Live Link
                            </button>
                        </Link>
                        <Link to={project.githubURL} target="_blank">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                                Github Link
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </li>
    )
    return (
        <div className="container-fluid p-3 list-unstyled">
            <ul>{projectListItems}</ul>
        </div>
    )
}