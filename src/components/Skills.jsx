import React from 'react'
import "../styles/Skills.css"
import skills from "./Skills.json"

function Skills() {
    const skillItems = skills.map(skill =>
        <div className="col-12 col-lg-3">
            <div className="skill-card d-grid justify-content-center align-items-center m-1 complete">
                <p className="text-uppercase text-light">Week {skill.week}</p>
                <h4 className="text-uppercase text-light">{skill.name}</h4>
            </div>
        </div>
    )
    return (
        <section className="container-fluid p-3" id="skills">
            <div className="row">
                <div className="card col-12">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-lg-4">
                            <h3 className="text-center py-5 display-5">Bootcamp Skills</h3>
                        </div>
                        <div className="col-12 col-lg-8 py-5 text-center">
                            <div className="row">
                                {skillItems}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills