import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import { UilAngleDown } from '@iconscout/react-unicons'

import './Navigation.scss'

class Navigation extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            projectsOpen: false
        }
    }

    openProjects = () => {
        console.log("clicked")
        let current = this.state.projectsOpen
        this.setState({
            projectsOpen: !current
        })
    }

    getLinkStyle = () => {
        switch (this.state.projectsOpen) {
            case true:       
                return "hide-links"
            default:
                return ""
        }
    }

    getProjectsStyle = () => {
        switch (this.state.projectsOpen) {
            case true:       
                return "show-projects"
            default:
                return ""
        }
    }

    checkSelectedLink = (link) => {
        return this.props.location.pathname.split("/")[1] === link ? {fontFamily: "Montserrat"} : {}
    }

    checkSelectedProject = (name) => {
        let path = this.props.location.pathname.split("/")

        if (path[1] === "projects" && path[2] === name) {
            return {
                fontFamily : "Montserrat"
            }
        }
    }

    render(){
        return (
            <div className="navigation-container">
                <div className="navigation-content">
                    <div className="navigation-name">
                        <h1 className="navigation-name-text">
                            Ethan Grebmeier
                        </h1>
                        <div className="divider" />
                    </div>
                    
                    <div className="navigation-menu">

                        <button className={`navigation-menu-option navigation-projects-dropdown ${this.state.projectsOpen ? 'open' : 'closed'}`} style={this.checkSelectedLink("projects")} onClick={this.openProjects}> 
                            Projects 
                            <UilAngleDown size="50" color="#6B9080" className="projects-arrow" /> 
                        </button>

                        <div className={`navigation-menu-projects-links ${this.getProjectsStyle()} `}>
                            <Link to='/projects/traace' className="navigation-menu-option navigation-menu-project" style={this.checkSelectedProject("traace")} > - Traace </Link>
                            <Link to='/projects/sorter' className="navigation-menu-option navigation-menu-project" style={this.checkSelectedProject("sorter")} > - Sorter </Link>
                            <Link to='/projects/say-hello' className="navigation-menu-option navigation-menu-project" style={this.checkSelectedProject("say-hello")} > - Say Hello </Link>
                            <Link to='/projects/memorizer' className="navigation-menu-option navigation-menu-project" style={this.checkSelectedProject("memorizer")} > - Memorizer </Link>
                            <Link to='/projects/reader' className="navigation-menu-option navigation-menu-project" style={this.checkSelectedProject("reader")} > - Reader </Link>
                            <Link to='/projects/guesser' className="navigation-menu-option navigation-menu-project" style={this.checkSelectedProject("guesser")} > - Guesser </Link>
                        </div>

                        <div className={`navigation-menu-links ${this.getLinkStyle()} `} >
                            <Link to='/about' className="navigation-menu-option" style={this.checkSelectedLink("about")} > About Me </Link>
                            <Link to='/experience' className="navigation-menu-option" style={this.checkSelectedLink("experience")} > Experience </Link>
                            <Link to='/resume' className="navigation-menu-option" style={this.checkSelectedLink("resume")} > Resume </Link>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Navigation)