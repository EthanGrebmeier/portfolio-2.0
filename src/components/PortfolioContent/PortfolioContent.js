import React from 'react'
import './PortfolioContent.scss'

export default class PortfolioContent extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        console.log(this.props.page)
    }

    render(){
        
        return ( 
            <div className="portfolio-content">
                <h1> {this.props.page} </h1>
            </div>
        )
    }
}