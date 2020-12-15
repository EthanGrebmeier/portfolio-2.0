import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'

import './Navigation.scss'

export default class Navigation extends React.Component {
    constructor(props){
        super(props)
        this.state = {

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
                        <button className="navigation-menu-option navigation-projects-dropdown"> Projects </button>
                        <Link to='/about' className="navigation-menu-option"> About </Link>
                        <Link to='/experience' className="navigation-menu-option"> Experience </Link>
                        <Link to='/resume' className="navigation-menu-option"> Resume </Link>
                    </div>
                </div>
            </div>
        )
    }
}