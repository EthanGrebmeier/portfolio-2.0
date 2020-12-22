import { UilBars, UilTimes } from '@iconscout/react-unicons'

function MobileBurger(props){

    let checkMode = (showMobileNav) => {
        if (showMobileNav){
            return "primary"
        } 
        return "secondary"
    }

    let checkIcon = () => {
        if (props.showMobileNav) {
            return <UilTimes size="30" color={props.getColors(props.colorMode, checkMode(props.showMobileNav), "text")} />
        }
        return <UilBars size="30" color={props.getColors(props.colorMode, checkMode(props.showMobileNav), "text")} />
    }

    return (
        <button className="mobile-only mobile-burger" onClick={() => props.setShowMobileNav(!props.showMobileNav)}> 
            {checkIcon()}
        </button>
    )
}

export default MobileBurger