import React from 'react'
import Home from './Home/Home'
import About from './About/About'
import Contact from './Contact/Contact'
import Projects from './Project/Project'


const ScrollToTop=(props)=>{

  return(
    <>
    <div id='/'>
                <Home isdark={props.isdark} setdark={props.setdark}/>
            </div>
            <div id='/projects'>
                <Projects isdark={props.isdark} setdark={props.setdark} />
            </div>
            <div id='/about'>
                <About isdark={props.isdark} setdark={props.setdark} />
            </div>
            <div id='/contact'>
                <Contact isdark={props.isdark} setdark={props.setdark} />
            </div>
    </>
  )
};

export default ScrollToTop;