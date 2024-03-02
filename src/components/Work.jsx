import React from 'react'
import "../styles/Work.css"

const projects = {
    assignment1: {
        name: "Accessible HTML",
        id: "1",
        description: "",
        githubURL: "https://github.com/sarenne89/Accessible-HTML",
        deployedURL: "https://sarenne89.github.io/Accessible-HTML",
        score: "99%",
    },
    assignment2: {
        name: "Flex-Grid Portfolio",
        id: "2",
        description: "",
        githubURL: "https://github.com/sarenne89/Flex-Grid-Portfolio",
        deployedURL: "https://sarenne89.github.io/Flex-Grid-Portfolio",
        score: "100%",
    },
    assignment3: {
        name: "Bootstrap Portfolio",
        id: "3",
        description: "",
        githubURL: "https://github.com/sarenne89/bootstrap-portfolio",
        deployedURL: "https://sarenne89.github.io/bootstrap-portfolio",
        score: "100%",
    },
    assignment4: {
        name: "Console Finances",
        id: "4",
        description: "",
        githubURL: "https://github.com/sarenne89/Console-Finances",
        deployedURL: "https://sarenne89.github.io/Console-Finances",
        score: "100%",
    },
    assignment5: {
        name: "Password Generator",
        id: "5",
        description: "",
        githubURL: "https://github.com/sarenne89/Password-Generator",
        deployedURL: "https://sarenne89.github.io/Password-Generator",
        score: "100%",
    },
    assignment6: {
        name: "Coding Quiz",
        id: "6",
        description: "",
        githubURL: "https://github.com/sarenne89/Coding-Quiz",
        deployedURL: "https://sarenne89.github.io/Coding-Quiz",
        score: "100%",
    },
    assignment7: {
        name: "Planner App",
        id: "7",
        description: "",
        githubURL: "https://github.com/sarenne89/Planner-App",
        deployedURL: "https://sarenne89.github.io/Planner-App",
        score: "100%",
    },
    assignment8: {
        name: "Weather Dashboard",
        id: "8",
        description: "",
        githubURL: "https://github.com/sarenne89/Weather-Dashboard",
        deployedURL: "https://sarenne89.github.io/Weather-Dashboard",
        score: "100%",
    },
    project1: {
        name: "Project 1 - Things To Do In My City",
        id: "9",
        description: "",
        githubURL: "https://github.com/sarenne89/TTDIMC",
        deployedURL: "https://sarenne89.github.io/TTDIMC",
        score: "97%",
    },
    assignment9: {
        name: "README Generator",
        id: "10",
        description: "",
        githubURL: "https://github.com/sarenne89/README-Generator",
        deployedURL: "",
        score: "100%",
    },
    assignment10: {
        name: "Team Profile Generator",
        id: "11",
        description: "",
        githubURL: "https://github.com/sarenne89/team-profile-generator",
        deployedURL: "",
        score: "87%",
    },
    assignment11: {
        name: "React Portfolio",
        id: "12",
        description: "",
        githubURL: "https://github.com/sarenne89/react-portfolio",
        deployedURL: "",
        score: "",
    }
}

const Work = () => {
    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];
        console.log(project)
    
    }
}
Work();

export default Work