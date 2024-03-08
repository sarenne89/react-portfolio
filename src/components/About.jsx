import React from 'react'
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className="container-fluid p-3">
            <div className="row flex-lg-row-reverse align-items-center g-5 p-2">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src="img/profile.jpg" className="d-block mx-lg-auto img-fluid" alt="A profile picture of Matt Dunmore" width="100%" height="100%" />
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold 1h-1 mb-3">//Matt Dunmore</h1>
                    <p className="lead">A conscientious, hardworking and highly reliable individual with the ability to work both within a
                        team and independently using own initiative. A strong work ethic, ability to work under pressure
                        and effective in building and maintaining relationships with employees and management at all
                        levels within an organisation, expressing confidence and ability to manage expectations and
                        workloads.
                    </p>
                    <Link to="/skills">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                            Check my skills
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default About