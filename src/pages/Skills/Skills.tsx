import React from 'react';
import './Skills.css';

import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava,
  FaDocker, FaAws, FaPython, FaDatabase,
  FaAngular, FaBootstrap, FaGitAlt
} from 'react-icons/fa';
import {
  SiSharp, SiTypescript, SiPostgresql, SiMysql, SiMongodb, SiGooglecloud
} from 'react-icons/si';
import { IconType } from 'react-icons';

type SkillCategory = {
  title: string;
  skills: {
    name: string;
    icon: IconType;
  }[];
};

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'React', icon: FaReact },
      { name: 'Angular', icon: FaAngular },
      { name: 'Bootstrap', icon: FaBootstrap },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Python', icon: FaPython },
      { name: 'Java', icon: FaJava },
      { name: 'C#', icon: SiSharp },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Typescript', icon: SiTypescript },
    ],
  },
  {
    title: 'Banco de Dados',
    skills: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: FaAws },
      { name: 'GCP', icon: SiGooglecloud },
      { name: 'Docker', icon: FaDocker },
    ],
  },
];

function Skills() {
  return (
    <div className="skills-container">
      <h2 className="skills-title">Habilidades</h2>
      <div className="skills-grid">
        {skillCategories.map((category, idx) => (
          <div className="skill-category" key={idx}>
            <h3>{category.title}</h3>
            <div className="skill-items">
              {category.skills.map((skill, index) => (
                <div className="skill-card" key={index}>
                  {React.createElement(skill.icon, { className: 'skill-icon' })}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
