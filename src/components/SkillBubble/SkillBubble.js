import React from 'react'


export default function SkillBubble(props){
    let styles = {
        skillBubble : {
            height: props.size === "small" ? "25px" : "35px",
            width: props.size === "small" ? "120px" : "150px",
            marginTop: "10px",
            borderRadius: "20px",
            border: `2px solid ${props.color}`,
            color: `${props.color}`,
            fontSize: props.size === "small" ? "14px" : "20px",
            fontWeight: '600',
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    }

    return (
    <div style={styles.skillBubble}>
        {props.skillName}
    </div>)
}