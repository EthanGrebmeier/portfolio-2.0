import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import { UilAngleDown } from '@iconscout/react-unicons'
import IconBar from '../IconBar/IconBar'
import './Navigation.scss'

class Navigation extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            projectsOpen: false,
            isMobile: false
        }
    }

    componentDidMount(){
        if (this.props.location.pathname.split("/")[1] === "projects"){
            this.setState({
                projectsOpen: true
            })
        }

        if (window.innerWidth <= 1000){
            this.setState({
                isMobile: true
            })
        }
    }

    openProjects = () => {
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

    getLinkColor = (mode) => {
        switch (mode) {
            case "dark": 
                return "dark-link"
            default:
                return ""
        }
    }

    render(){
        return (
            <div className={`navigation-container ${this.props.showMobileNav ? "show-mobile-navigation" : ""}`} style={this.props.getColorsObject(this.props.colorMode, "secondary", "background")} >
                <div className={`navigation-content ${this.getLinkColor(this.props.colorMode)}`} style={this.props.getColorsObject(this.props.colorMode, "primary", "text")}>
                    <div className="navigation-name">
                        <h1 className="navigation-name-text">
                            Ethan Grebmeier
                        </h1>
                        <div className="divider" style={this.props.getColorsObject(this.props.colorMode, "primary", "background")} />
                    </div>
                    
                    <div className="navigation-menu" style={this.props.getColorsObject(this.props.colorMode, "primary", "text")} >

                        <div className={`navigation-menu-option navigation-projects-dropdown ${this.state.projectsOpen ? 'open' : 'closed'}`} style={this.checkSelectedLink("projects")} onClick={this.openProjects}> 
                            <span style={this.props.getColorsObject(this.props.colorMode, "primary", "text")}> Projects <UilAngleDown size="40" color={this.props.getColors(this.props.colorMode, "primary", "background")} className="projects-arrow" />  </span>   
                        </div>

                        <div className={`navigation-menu-projects-links ${this.getProjectsStyle()}`} >
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
                            <a href='https://drive.google.com/file/d/1gweVn7KRg_OwJkw2KKU1Y8EpaEOE-bGp/view?usp=sharing' target="_blank" rel="noreferrer" className="navigation-menu-option" style={this.checkSelectedLink("resume")} > Resume </a>
                        </div>

                    </div>
                </div>
                <IconBar color={this.props.getColors(this.props.colorMode, "primary", "background")} colorMode={this.props.colorMode} switchColorMode={this.props.switchColorMode} />
            </div>
        )
    }
}

export default withRouter(Navigation)