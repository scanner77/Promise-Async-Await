import React, {useEffect, useState} from 'react'

export default function Child (props){
 
  useEffect(()=>{
      console.log(props)
    document.title = props.count
  },[props.count==3])

  return( 
  <>
    <h1>Child COmponent</h1>
    <h2>{props.count}</h2>
  </>
  )
}

