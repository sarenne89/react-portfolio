import React from 'react'
import { Link } from 'react-router-dom';
import profilePhoto from '../assets/img/profile.jpg'

function Home() {
    return (
        <div className="container-fluid p-3" loading="lazy">
            <div className="row flex-lg-row-reverse align-items-center g-5 p-2">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={profilePhoto} className="d-block mx-lg-auto img-fluid" alt="A profile picture of Matt Dunmore" width="100%" height="100%" />
                </div>
                <div className="col-lg-6">
                    <h1 className="display-4 fw-bold 1h-1 mb-3">//Matt Dunmore</h1>
                    <h3 className="display-5 1h-1 mb-3">//Learning something new every day.</h3>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <Link to="/about">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                                Learn more
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home