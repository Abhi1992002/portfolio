import React from 'react'
import "./spacehome.css"
import space_home from "../../assets/space.png"
export default function Spacehome() {
  return (
    <div className='spacehome' >
         <img className='spacehome_space' src={space_home} alt="space"></img>
    </div>
  )
}
