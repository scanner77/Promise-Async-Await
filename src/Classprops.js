import React from 'react'

const Classprops = (props) => {
    return (
        <div>
            <h1>
                {props.name}
                from
                {props.place}
            </h1>
            <p>{props.children}</p>
        </div>
    )
}

export default Classprops
