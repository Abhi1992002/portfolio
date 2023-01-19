import React from 'react'
import "./navbar.css"

export default function Navbar() {
  return (
    <div className='navigation'>
      <div className='navigation_logo home_gradient'>ABatwOrk</div>
      <div className='navigation_links' id = "home_link"><a href='#home_link'><span className='home_gradient'>1.</span>Home</a></div>
      <div className='navigation_links' id = "about_link"><a href='#about_link'><span className='about_gradient'>2.</span>About</a></div>
      <div className='navigation_links' id = "project_link"><a href='#project_link'><span className='project_gradient'>3.</span>Project</a></div>
      <div className='navigation_links' id = "contact_link"><a href='#contact_link'><span className='contact_gradient'>4.</span>Contact</a></div>
      <div className='navigation_links' id = "resume_link"><a href='#resume_link'><span className='resume_gradient'>5.</span>Resume</a></div>
    </div>
  )
}
