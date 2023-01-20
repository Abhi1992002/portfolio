import React from 'react'
import "./home.css"
import big_planet from "../../assets/big_planet.png"
import small_planet from "../../assets/plant.png"
import home_arrow from "../../assets/arrow/home_arrow.svg"

import about_arrow_1 from "../../assets/arrow/about_arrow_1.svg" 
export default function Home() {
  return (
    <div className='homepage'>
      <div className='homepage_detail'> 
      <p>Hello</p>
      <p>I am <span className='home_gradient'>Abhimanyu,</span></p>
      <p>Full Stack Developer</p>
      <p className='home_small'>Currently located in India, I love building <span className='home_gradient'>interactive</span> digital experiences on the web</p>
      <button className='home_border'>Let’s get in touch!</button>
      </div>
      <img className='homepage_bigimage' src={big_planet} alt="main planet" />
      <img className='homepage_smallimage' src={small_planet} alt="small planet" />
      {/* <img className="home_arrow" src={home_arrow} alt="arrow" ></img> */}
      </div>
  )
}
