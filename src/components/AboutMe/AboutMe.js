import React from 'react'

import './AboutMe.scss'
import { UilPodium, UilGraduationCap, UilBriefcaseAlt } from '@iconscout/react-unicons'
import '../SkillBubble/SkillBubble'
import SkillBubble from '../SkillBubble/SkillBubble'

export default function AboutMe(){
    return (

    <div className="about-me-content">

        <div className="about-me-title">
            <h1> <br/> About Me </h1>
        </div> 

        <div className="about-me-professional">
            <div className="divider" />
            <div className="about-me-professional-section">
                <h3 className="about-me-professional-text" >Information Systems </h3>
                <UilPodium size="40" color="#EAF4F4" />
            </div>
            <div className="about-me-professional-section">
                <h3 className="about-me-professional-text">Cal Poly, San Luis Obispo</h3>
                <UilGraduationCap size="40" color="#EAF4F4" />
            </div>
            <div className="about-me-professional-section">
                <h3 className="about-me-professional-text">Full Stack Web Developer</h3>
                <UilBriefcaseAlt size="40" color="#EAF4F4" />
            </div>
            <div className="divider" />
        </div>

        <div className="about-me-skills">

            <h3> Skills </h3>

            <div className="about-me-skills-section">
                <h4> Programming Languages: </h4>
                <div className="about-me-skills-bubbles">
                    <SkillBubble skillName="Python"/>
                    <SkillBubble skillName="Javascript"/>
                </div>
            </div>

            <div className="about-me-skills-section">
                <h4> Front-End: </h4>
                <div className="about-me-skills-bubbles">
                    <SkillBubble skillName="React"/>
                    <SkillBubble skillName="JQuery"/>
                </div>
            </div>

            <div className="about-me-skills-section">
                <h4> Back-End and Databases: </h4>
                <div className="about-me-skills-bubbles">
                    <SkillBubble skillName="Node.JS"/>
                    <SkillBubble skillName="Express"/>
                    <SkillBubble skillName="PostgreSQL"/>
                    <SkillBubble skillName="MongoDB"/>
                </div>
            </div>

        </div>
        
    </div>)

}