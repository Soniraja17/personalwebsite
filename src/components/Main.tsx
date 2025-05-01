import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import mock11 from '../assets/images/mock11.jpg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={mock11} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Soniraja17" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/soni-raja-1247b4343/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Soni Raja</h1>
          <p>Cloud and devOps Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Soniraja17" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;