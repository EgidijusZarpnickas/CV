import { useEffect, useState } from 'react';
import './style/header.scss';
import htmlImg from '../assets/html.png';
import cssImg from '../assets/css.png';
import jsImg from '../assets/js.png';
import reactImg from '../assets/react.png';
import nodeImg from '../assets/node.png';
import mysqlImg from '../assets/mysql.png';
import figmaImg from '../assets/figma.png';
import githubImg from '../assets/github.png';
import foto from '../assets/Profilio.jpg';

export default function Header() {
    const skills = [
        { name: 'HTML', level: 90, icon: htmlImg },
        { name: 'CSS/SCSS', level: 85, icon: cssImg },
        { name: 'JavaScript', level: 70, icon: jsImg },
        { name: 'React', level: 65, icon: reactImg },
        { name: 'Node.js', level: 60, icon: nodeImg },
        { name: 'MySQL(MariaDB)', level: 75, icon: mysqlImg },
        { name: 'Figma', level: 90, icon: figmaImg },
        { name: 'GitHub', level: 60, icon: githubImg },
    ];





    return (
        <header className="header" id="about">
            <div className="header-container">
                <div className="header-image">
                    <h1>Egidijus Žarpnickas</h1>
                    <h2> Junior full stack developer</h2>
                    <p className="description">
                        Esu entuziastingas web kūrėjas, besispecializuojantis modernių web aplikacijų kūrime.
                        Turiu patirties dirbant su React, JavaScript ir kitomis moderniomis technologijomis.
                    </p>
                    <img src= {foto} alt="Profile" />
                </div>

                <div className="header-content">
      

                    <div className="skills-section">
                        <h3>Mano įgūdžiai</h3>
                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <div key={index} className="skill-item">
                                    <div className="skill-info">
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className="skill-icon"
                                            style={{ width: '24px', height: '24px', marginRight: '8px', verticalAlign: 'middle' }}
                                        />
                                        <span className="skill-name">{skill.name}</span>
                                        <span className="skill-percentage">{skill.level}%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-progress"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}