import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'
export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'simply learn'
        }
    }
    componentDidMount(){
        setInterval(()=> {
            this.setState({
                name: "Simply Learn"
            })
        },3000)
    }

    
    render() {
        return (
            <div>
                I'm a parent component
                <RegularComp  name = {this.state.name}/>
                <PureComp name = {this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
