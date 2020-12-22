import React from 'react'
import { UilEnvelope, UilSun, UilMoon, UilLinkedin, UilGithub  } from '@iconscout/react-unicons'
import './IconBar.scss'


let clickGithub = () => {
    window.open("https://github.com/EthanGrebmeier", "_blank")

}

let clickLinkedin = () => {
    window.open("https://www.linkedin.com/in/ethan-g-b23439116/", "_blank")
}

let clickEmail = () => {
    window.open("mailto:ethangrebmeier@gmail.com", "_blank")
}


let switchColor = (currentMode, switchColorMode) => {
    switch (currentMode) {
        case "dark":
            
            switchColorMode("light")
            break

        default:
            switchColorMode("dark")
            break
    }
}

let getColorSwitch = (currentMode, color) => {
    switch (currentMode) {
        case "dark" :
            return <UilMoon size="30" color={color}/>
        default: 
            return <UilSun size="30" color={color}/>
    }
}

function IconBar(props){
    return (
        <div className="icon-bar">

            <button className="icon-bar-button" onClick={() => switchColor(props.colorMode, props.switchColorMode)}>
                {getColorSwitch(props.colorMode, props.color)}
            </button>

            <button className="icon-bar-button" onClick={clickEmail}>
                <UilEnvelope size="30" color={props.color}/>
            </button>
            
            <button className="icon-bar-button" onClick={clickLinkedin}>
                <UilLinkedin size="30" color={props.color}/>
            </button>

            <button className="icon-bar-button" onClick={clickGithub}>
                <UilGithub size="30" color={props.color}/>
            </button>
        </div>
    )
}

export default IconBar