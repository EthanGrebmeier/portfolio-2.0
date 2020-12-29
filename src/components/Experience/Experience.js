import './Experience.scss'

let Experience = (props) => {
    return (
        <div className="experience-container" style={props.getColorsObject(props.colorMode, "secondary", "text")}>
            <div className="experience-header"> 
                <h1> <br/> <br className="mobile-only" /> Experience </h1>
            </div>
            <div className="experience-content" >
                <div className="divider" style={props.getColorsObject(props.colorMode, "secondary", "background")}/>
                <div className="experience-position" >
                    <h3 className="timeline"> Nov 2020 - Present </h3>
                    <h3 className="company"> Mustang Media - SLO, Ca </h3>
                    <h3 className="position"> Web Developer </h3>
                    <a href="https://mustangnews.net/"> Website </a>
                </div>
                <div className="divider" style={props.getColorsObject(props.colorMode, "secondary", "background")} />
                <div className="experience-position">
                    <h3 className="timeline"> Jun 2020 - Present </h3>
                    <h3 className="company"> The Future is Good - SLO, Ca </h3>
                    <h3 className="position"> Web Development Intern </h3>
                    <a href="https://thefutureisgood.co/"> Website </a>
                </div>
                <div className="divider" style={props.getColorsObject(props.colorMode, "secondary", "background")} />
                <div className="experience-position">
                    <h3 className="timeline"> Dec 2019 - Present </h3>
                    <h3 className="company">  Ship Offers - Denver, Co </h3>
                    <h3 className="position"> Integrated Logistics Support Specialist </h3>
                    <a href="https://shipoffers.com/"> Website </a>
                </div>
            </div>
        </div>
    )
}

export default Experience