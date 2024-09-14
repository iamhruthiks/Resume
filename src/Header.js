import React from 'react'
import ProfilePic from './profile-pic.jpg';

const Header = () => {
    return (
        <header className="resume-header">
            <img src={ProfilePic} alt="Hruthik S" className="profile-pic" />
            <h1>Hruthik S</h1>
            <p>📧 Email: iamhruthiks@gmail.com | 📞 Phone: +91 9148190397 | <a href='https://www.linkedin.com/in/iamhruthiks/'>🌐LinkedIn</a> | <a href='https://github.com/iamhruthiks'>😺GitHUb</a></p> | 📍Bangalore, Karnataka
        </header>

    )
}

export default Header
