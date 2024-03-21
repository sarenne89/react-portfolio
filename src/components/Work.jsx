import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Work.css"
import projects from "./Projects.json"

export default function Work() {
    const projectListItems = projects.map(project =>
        <li className="shadow-lg">
            <div className="row flex-lg align-items-center g-5 py-5 my-5 project">
                <div className="col-lg-6">
                    <h5 className="display-5">{project.name}</h5>
                    <h5>Grade: {project.score}</h5>
                    <p className="lead">{project.description}</p>
                    <div className="d-flex justify-content-evenly">
                        <Link to={project.deployedURL} target="_blank">
                            <button type="button" className="btn btn-primary btn-lg px-4 shadow">
                                Live Link
                            </button>
                        </Link>
                        <Link to={project.githubURL} target="_blank">
                            <button type="button" className="btn btn-primary btn-lg px-4 shadow">
                                Github Link
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="col-10 col-sm-8 col-lg-6 img-fluid">
                    <img className="d-block mx-lg-auto img-fluid" src={project.imgPath} alt="A screenshot from this project" />
                </div>
            </div>
        </li>
    )
    return (
        <section className="container-fluid p-3 list-unstyled background d-flex justify-content-center">
            <ul className="col-11 justify-content-center">{projectListItems}</ul>
        </section>
    )
}