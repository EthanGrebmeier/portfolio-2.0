import React, {useEffect} from 'react'

import AboutMe from '../AboutMe/AboutMe'
import Project from '../Project/Project'
import './PortfolioContent.scss'

function PortfolioContent(props){

    useEffect(() => {
        console.log(props.projectName)
    }, [])

    let getPortfolioContent = (page) => {
        switch (page) {
            case "about":
                
                return (<AboutMe/>)
        
            case "project":
                
                return (<Project
                    projectName={props.projectName}
                    key={props.projectName}
                    />)
        
            default:
                return <h1> {page} </h1>
        }
    }

    return ( 
        <div className="portfolio-content">
            {getPortfolioContent(props.page)}
        </div>
    )
}

export default PortfolioContent