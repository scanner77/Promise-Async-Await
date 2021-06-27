import React, { Component } from 'react'

export class RegularComp extends Component {
    render() {
        return (
            <div>
                I'm the regular component
                {this.props.name}
            </div>
        )
    }
}

export default RegularComp
