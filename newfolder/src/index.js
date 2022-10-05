import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

function MyResume() {
  return (
    <div className="main">
      <div>
        <img
          className="picture"
          src="https://avatars.githubusercontent.com/u/101432140?v=4"
          alt="Profile"
        ></img>
      </div>
      <div>
        <ul>
          <h1 className="pinfo">daniyal</h1>
          <li className="pinfo">up North Karachi</li>
          <li className="pinfo">
            <u>daniyal@gmail.com</u> +92 3333748662
          </li>
          <li className="pinfo">Web:
            <a href="https://raza-app.web.app" target="_blank" rel="noreferrer">
              View profile page
            </a>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <h2 className="subhead-1">Education</h2>
          <li>
            <h3>Bachlors of Computer Science</h3>
          </li>
          <div className="details">
            <span className="noborder">
             urdu fedral university
            </span>
          </div>

          <li>
            <h3>Intermediate</h3>
          </li>
          <div className="details">
            <span className="noborder">
             Govt.degree boys collage 5l
            </span>
          </div>
        </ul>
      </div>
      <div>
        <ul>
          <h2 className="subhead-all">Professional Experience</h2>
          <li>
            <h3>Systems Limited</h3>
          </li>
          <div className="details">
            <span className="noborder">
              Worked as Advisory Quality Engineer
            </span>
          </div>

          <li>
            <h3>ITIM Systems</h3>
          </li>
          <div className="details">
            <span className="noborder">Worked as Lead Quality Engineer</span>
          </div>
        </ul>
      </div>
      <div>
        <ul>
          <h2 className="subhead-all">Technical Skills</h2>
          <li>
            <h3>Languages</h3>
          </li>
          <div className="details">
            <span className="hovereffect">C / C++</span>
            <span className="hovereffect">Java</span>
            <span className="hovereffect">JavaScript</span>
            <span className="hovereffect">Visual Basic</span>
            <span className="hovereffect">HTML</span>
            <span className="hovereffect">CSS</span>
            <span className="hovereffect">React JS</span>
            <span className="hovereffect">React Native</span>
          </div>

          <li>
            <h3>Databases</h3>
          </li>
          <div className="details">
            <span className="hovereffect">Microsoft SQL Server 2014</span>
            <span className="hovereffect">Oracle 12c</span>
          </div>
          <li>
            <h3>Platforms</h3>
          </li>
          <div className="details">
            <span className="hovereffect">Windows 7</span>
            <span className="hovereffect">Windows 10</span>
            <span className="hovereffect">Windows Server 2008</span>
            <span className="hovereffect">Windows Server 2012</span>
          </div>
          <li>
            <h3>Testing / Bug Tacking Tools</h3>
          </li>
          <div className="details">
            <span className="hovereffect">PVCS Tracker</span>
            <span className="hovereffect">Team Foundation Server (TFS)</span>
            <span className="hovereffect">Microsoft Test Manager (MTM)</span>
            <span className="hovereffect">JIRA</span>
          </div>

          <li>
            <h3>Other Tools</h3>
          </li>
          <div className="details">
            <span className="hovereffect">SQL Profiler</span>
            <span className="hovereffect">Visual Studio 2010</span>
            <span className="hovereffect">Fiddler</span>
            <span className="hovereffect">VM Ware</span>
            <span className="hovereffect">Virtual Box</span>
            <span className="hovereffect">Hyper-V Manager</span>
            <span className="hovereffect">Visual Source Safe</span>
            <span className="hovereffect">Microsoft Project</span>
            <span className="hovereffect">Microsoft BizTalk Server</span>
            <span className="hovereffect">EDI / TRADACOM Standards</span>
          </div>
        </ul>
      </div>
    </div>
  );
}

ReactDOM.render(<MyResume />, document.querySelector("#root"));