import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Work.css"
import projects from "./Projects.json"

export default function Work() {
    const projectListItems = projects.map(project =>
        <li>
            <div className="row flex-lg align-items-center g-5 py-5 my-5">
                <div className="col-lg-6">
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
                <div className="col-10 col-sm-8 col-lg-6 img-fluid">
                    <img className="d-block mx-lg-auto img-fluid" src={project.imgPath} alt="A screenshot from this project" />
                </div>
            </div>
            <div className="divider m-0 p-0"></div>
        </li>
    )
    return (
        <div className="container-fluid p-3 list-unstyled">
            <ul>{projectListItems}</ul>
        </div>
    )
}