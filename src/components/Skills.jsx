import React from 'react'
import "../styles/Skills.css"
import frontendSkills from "./frontendSkills.json"
import skills from "./skills.json"

function printSkills() {
    const frontendSkillItems = frontendSkills.map(frontendSkill =>
        <div className="col-12 col-md-6">
            <div className="skill-card d-grid justify-content-center align-items-center m-1 complete">
                <h5 className="text-uppercase text-light">{frontendSkill.name}</h5>
            </div>
        </div>
    )
    const skillItems = skills.map(skill =>
        <div className="col-12 col-md-6">
            <div className="skill-card d-grid justify-content-center align-items-center m-1 complete">
                <h5 className="text-uppercase text-light">{skill.name}</h5>
            </div>
        </div>
        )
    return (
        <div className="d-flex-column justify-content-center background py-3">
            <div className="container-fluid col-10 p-3 d-flex justify-content-center skillList shadow-lg my-2" id="frontendSkills">
                <div className="row">
                    <div className="col-12">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-12 col-lg-4">
                                <h3 className="text-center py-5 display-5">Frontend Development Skills</h3>
                            </div>
                            <div className="col-12 col-lg-8 py-5 text-center">
                                <div className="row">
                                    {frontendSkillItems}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid col-10 p-3 d-flex justify-content-center skillList my-5 shadow-lg" id="skills">
                <div className="row">
                    <div className="col-12">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-12 col-lg-4">
                                <h3 className="text-center py-5 display-5">Skills</h3>
                            </div>
                            <div className="col-12 col-lg-8 py-5 text-center">
                                <div className="row">
                                    {skillItems}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default printSkills;