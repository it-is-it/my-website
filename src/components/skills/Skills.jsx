import "./Skills.css";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiDjango,
  SiPython,
  SiGit,
  SiReact,
  SiNextdotjs,
  SiC,
  SiCplusplus,
  SiDotnet,
  SiMysql,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa"; 

const skillIcons = {
  Html5: <SiHtml5 className="icon text-orange-500" />,
  Css3: <SiCss3 className="icon text-blue-500" />,
  BootStrap: <SiBootstrap className="icon text-purple-500" />,
  "Tailwind Css": <SiTailwindcss className="icon text-cyan-500" />,
  Javascript: <SiJavascript className="icon text-yellow-500" />,
  "Rest Api": <FaDatabase className="icon text-gray-500" />, 
  "React-Js": <SiReact className="icon text-blue-400" />,
  "Next-Js": <SiNextdotjs className="icon text-black" />,
  MySql: <SiMysql className="icon text-blue-700" />,
  Django: <SiDjango className="icon text-green-700" />,
  Python: <SiPython className="icon text-blue-400" />,
  "Git & GitHub": <SiGit className="icon text-red-500" />,
  C: <SiC className="icon text-blue-600" />,
  "C++": <SiCplusplus className="icon text-blue-400" />,
  DotNet: <SiDotnet className="icon text-purple-600" />,
};

const Skills = () => {
  const skills = [
    "Html5",
    "Css3",
    "BootStrap",
    "Tailwind Css",
    "Javascript",
    "Rest Api",
    "React-Js",
    "Next-Js",
    "MySql",
    "Django",
    "Python",
    "Git & GitHub",
    "C",
    "C++",
    "DotNet",
  ];

  return (
    <div className="skills space" id="skills">
      <h5>What I Bring to the Table</h5>
      <h2>Core Skills</h2>
      <div className="container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skillIcons[skill] || <FaDatabase className="icon text-gray-500" />}
            <h4>{skill}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
