import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import img from "./download.png"

function MyResume() {
  return (
    <div className="main">
      <div>
        <img
          className="picture"
          src={img}
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
              Shah Latif University Khirpur, Sind
            </span>
          </div>

          <li>
            <h3>Intermediate</h3>
          </li>
          <div className="details">
            <span className="noborder">
              Govt. Degree College For Men, Nazimabad
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
            <span className="hovereffect">JavaScript</span>
            <span className="hovereffect">Visual Basic</span>
            <span className="hovereffect">HTML</span>
            <span className="hovereffect">CSS</span>
         
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

          </div>
          <li>
            <h3>Testing / Bug Tacking Tools</h3>
          </li>
          <div className="details">
            <span className="hovereffect">PVCS Tracker</span>
            <span className="hovereffect">JIRA</span>
          </div>

        </ul>
      </div>
    </div>
  );
}

ReactDOM.render(<MyResume />, document.querySelector("#root"));