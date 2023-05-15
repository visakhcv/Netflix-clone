import React, { useEffect, useState } from 'react'
import './Nav.css'


function Nav() {
    const [show,setshow]= useState(false)
    
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>500){
                setshow(true)
            }
            else{
                setshow(false)
            }
        })
    })

  return (

    

    <div className={`nav ${show && 'blacknav'}`}>
        <img style={{width:'150px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" alt="" />
    </div>
  )
}

export default Nav