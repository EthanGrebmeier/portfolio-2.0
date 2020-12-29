import React, {useEffect} from 'react'

import AboutMe from '../AboutMe/AboutMe'
import Project from '../Project/Project'
import Experience from '../Experience/Experience'
import IconBar from '../IconBar/IconBar'
import './PortfolioContent.scss'

function PortfolioContent(props){



    let getPortfolioContent = (page) => {
        switch (page) {
            case "about":
                
                return (<AboutMe 
                    getColorsObject={props.getColorsObject} 
                    colorMode={props.colorMode}
                    getColors={props.getColors}
                    />)
        
            case "project":
                
                return (<Project
                    projectName={props.projectName}
                    key={props.projectName}
                    getColorsObject={props.getColorsObject}
                    getColors={props.getColors} 
                    colorMode={props.colorMode}
                    />)
            case "experience":
                
                return (<Experience
                    getColorsObject={props.getColorsObject} 
                    colorMode={props.colorMode}
                    />)
        
            default:
                return <h1> {page} </h1>
        }
    }

    return ( 
        <div className="portfolio-content" style={props.getColorsObject(props.colorMode, "primary", "background")}>
            {getPortfolioContent(props.page)}
            <span className="mobile-only">
                <IconBar color={props.getColors(props.colorMode, "secondary", "background")} colorMode={props.colorMode} switchColorMode={props.switchColorMode} />
            </span>
        </div>
    )
}

export default PortfolioContent