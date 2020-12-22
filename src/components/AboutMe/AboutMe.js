import React from 'react'

import './AboutMe.scss'
import { UilPodium, UilGraduationCap, UilBriefcaseAlt } from '@iconscout/react-unicons'
import '../SkillBubble/SkillBubble'
import SkillBubble from '../SkillBubble/SkillBubble'

export default function AboutMe(props){
    return (

    <div className="about-me-content" style={props.getColorsObject(props.colorMode, "primary", "background")}>

        <div className="about-me-title" style={props.getColorsObject(props.colorMode, "secondary", "text")}>
            <h1 className="desktop-only"> <br/> About Me </h1>
            <h1 className="mobile-only mobile-nametag"> <br/> Ethan Grebmeier </h1>

        </div> 

        <div className="about-me-professional" style={props.getColorsObject(props.colorMode, "secondary", "text")}>
            <div className="divider"  style={props.getColorsObject(props.colorMode, "secondary", "background")} />
            <div className="about-me-professional-section">
                <h3 className="about-me-professional-text" >Information Systems </h3>
                <UilPodium size="40" color={props.getColors(props.colorMode, "secondary", "text")} />
            </div>
            <div className="about-me-professional-section">
                <h3 className="about-me-professional-text">Cal Poly, San Luis Obispo</h3>
                <UilGraduationCap size="40" color={props.getColors(props.colorMode, "secondary", "text")} />
            </div>
            <div className="about-me-professional-section">
                <h3 className="about-me-professional-text">Full Stack Web Developer</h3>
                <UilBriefcaseAlt size="40" color={props.getColors(props.colorMode, "secondary", "text")} />
            </div>
            <div className="divider" style={props.getColorsObject(props.colorMode, "secondary", "background")}/>
        </div>

        <div className="about-me-skills" style={props.getColorsObject(props.colorMode, "secondary", "text")}>
            <div className="about-me-skills-section">
                <h4> Programming Languages: </h4>
                <div className="about-me-skills-bubbles">
                    <SkillBubble size="small" skillName="Python" color={props.getColors(props.colorMode, "secondary", "text")}/>
                    <SkillBubble size="small" skillName="Javascript" color={props.getColors(props.colorMode, "secondary", "text")}/>
                </div>
            </div>

            <div className="about-me-skills-section">
                <h4> Front-End: </h4>
                <div className="about-me-skills-bubbles">
                    <SkillBubble size="small" skillName="React" color={props.getColors(props.colorMode, "secondary", "text")}/>
                    <SkillBubble size="small" skillName="JQuery" color={props.getColors(props.colorMode, "secondary", "text")}/>
                </div>
            </div>

            <div className="about-me-skills-section">
                <h4> Back-End and Databases: </h4>
                <div className="about-me-skills-bubbles">
                    <SkillBubble size="small" skillName="Node.JS" color={props.getColors(props.colorMode, "secondary", "text")}/>
                    <SkillBubble size="small" skillName="Express" color={props.getColors(props.colorMode, "secondary", "text")}/>
                    <SkillBubble size="small" skillName="PostgreSQL" color={props.getColors(props.colorMode, "secondary", "text")}/>
                    <SkillBubble size="small" skillName="MongoDB" color={props.getColors(props.colorMode, "secondary", "text")}/>
                </div>
            </div>

        </div>
        
    </div>)

}