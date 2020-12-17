import React from 'react'

let styles = {
    skillBubble : {
        height: "25px",
        width: "120px",
        marginTop: "10px",
        borderRadius: "20px",
        border: "1px solid #EAF4F4",
        color: "#EAF4F4",
        fontSize: "14px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}

export default function SkillBubble(props){
    return (
    <div style={styles.skillBubble}>
        {props.skillName}
    </div>)
}