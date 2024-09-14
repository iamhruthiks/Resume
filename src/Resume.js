import React, { useState } from "react";
import './Resume.css';
import Header from "./Header";
import Profile from "./Profile";
import Skills from "./Skills";
import Project from "./Project";
import Education from "./Education";
import Courses from "./Courses";
import Certifications from "./Certifications";
import Publications from "./Publications";
import Language from "./Language";
import Interest from "./Interest";

const Resume = () => {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`resume-container ${darkMode ? "dark-mode" : "light-mode"}`}>
            <Header />

            <button onClick={toggleDarkMode} className="toggle-mode-btn">
                {darkMode ? "Light Mode" : "Dark Mode"}
            </button>

            <div className="resume-content">
                <Profile />
                <Skills />
                <Project />
                <Education />
                <Courses />
                <Certifications />
                <Publications />
                <Language />
                <Interest />
                <a href="https://github.com/iamhruthiks/Resume">🔗source code: https://github.com/iamhruthiks/Resume </a>
            </div>
        </div>
    );
};

export default Resume;
