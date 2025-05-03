import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock12 from '../assets/images/mock12.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Soniraja17/personalwebsite" target="_blank" rel="noreferrer"><img src={mock12} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Soniraja17/personalwebsite" target="_blank" rel="noreferrer"><h2>Portfolio</h2></a>
                <p>Developed personal portfolio using react javascript and tailwind css express js and node js.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Soniraja17/jenkins-CI-CD" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Soniraja17/jenkins-CI-CD" target="_blank" rel="noreferrer"><h2>CI/CD Pipeline using Jenkins</h2></a>
                <p>Developed a CI/CD pipeline using Jenkins for a web application. The pipeline includes stages for building, testing, and deploying the application.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Soniraja17/Two-tier-Architecture" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Soniraja17/Two-tier-Architecture" target="_blank" rel="noreferrer"><h2>Two-tier flask application</h2></a>
                <p>Developed a two-tier flask application with a frontend and backend. The application includes a login system and a database deploying on AWS setup docker compose.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Soniraja17/My-chrome-extension" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Soniraja17/My-chrome-extension" target="_blank" rel="noreferrer"><h2>Video transcript chrome extension</h2></a>
                <p>Developed a chrome extension that allows users to extract video transcripts from YouTube videos. The extension uses the YouTube Data API to fetch the video transcripts.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Soniraja17/Covid-Screener" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Soniraja17/Covid-Screener" target="_blank" rel="noreferrer"><h2> COVID-19 Screener</h2></a>
                <p>Developed COVID-19 screener using arduino and sensor to detect temperature and maintanance of social distance coded in c++</p>
            </div>
            <div className="project">
                <a href="https://crypto-hunter.netlify.app/" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://crypto-hunter.netlify.app/" target="_blank" rel="noreferrer"><h2>Crypto hunter</h2></a>
                <p>Build Crypto tracking site using react js and tailwind css implementing Gen AI to generate crypto news and trends</p>
            </div>
            {/* <div className="project">
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Multiple Regression Property Analysis</h2></a>
                <p>Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
            </div>
            <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Programs of Study</h2></a>
                <p>Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.</p>
            </div>
            <div className="project">
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
                <p>Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><h2>Submeowrine</h2></a>
                <p>Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.</p>
            </div> */}
        </div>
    </div>
    );
}

export default Project;