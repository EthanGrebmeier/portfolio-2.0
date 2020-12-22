import React from 'react'
import {withRouter} from 'react-router-dom'
import './Project.scss'
import projects from './projects.json'
import SkillBubble from '../SkillBubble/SkillBubble'

class Project extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            projectName: "Traace.io",
            projectTimeline: "Sep 2020 - Dec 2020",
            projectDescription: "A Contact Tracing Application for Covid-19",
            projectStack: ["React", "Express", "PostreSQL"],
            projectGitHub: "https://github.com/EthanGrebmeier/contact-tracing-server",
            projectDemo: "https://traace.io",
        }
    }

    componentDidMount(){
        this.getProjectDetails(this.props.projectName)
    }

    getProjectDetails = (project) => {
        
        let projectObject = projects[project]
        this.setState({
            projectName: projectObject["name"],
            projectTimeline: projectObject["timeline"],
            projectDescription: projectObject["description"],
            projectStack: projectObject["stack"],
            projectGitHub: projectObject["gitHub"],
            projectDemo: projectObject["demo"],
        })
    }

    getPath = () => {
        return this.props.location.pathName.split("/")[2]
    }

    getProjectStack = () => {
        return this.state.projectStack.map((item) => (<SkillBubble size="large" skillName={item} color={this.props.getColors(this.props.colorMode, "secondary", "background")} />)
        )
    }

    render(){
        return(
            <div className="project-content" style={this.props.getColorsObject(this.props.colorMode, "secondary", "text")}>
                <div className="project-header">
                    <h3 className="project-timeline"> <br/> {this.state.projectTimeline} </h3>
                    <h1 className="project-name">{this.state.projectName}</h1>
                </div>
                <div className="project-description">
                    <div className="divider" style={this.props.getColorsObject(this.props.colorMode, "secondary", "background")} />
                    <h3 className="project-description-text"> {this.state.projectDescription} </h3>
                    <div className="divider" style={this.props.getColorsObject(this.props.colorMode, "secondary", "background")} />
                </div>
                <div className="project-stack">
                    <h3 className="project-stack-header"> Built Using: </h3>
                    {this.getProjectStack()}
                </div>
                <div className="project-links" >
                    <a href={this.state.projectDemo} target="_blank" rel="noreferrer" className="project-link" style={this.props.getColorsObject(this.props.colorMode, "secondary", "text")}> Demo </a>
                    <a href={this.state.projectGitHub} target="_blank" rel="noreferrer" className="project-link" style={this.props.getColorsObject(this.props.colorMode, "secondary", "text")}> Github </a>
                </div>
            </div>
        )
    }
}

export default withRouter(Project)