import React from 'react'
import "./Footer.css"
import Wave from "../../img/wave.png"



import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'




const Footer = () => {
  return (
      <div className="footer">
          <img src={Wave} alt="" style={{width: "100%"}}/>
          <div className="f-contant"> 
          <span>silenknight.w@gmail.com</span>
          <div className="f-icons">
              <a href="https://www.instagram.com/nayan_web_developer/"><Insta color = 'white' size='3rem'/></a>
              <a href="https://www.facebook.com/profile.php?id=100013011423438"><Facebook color='white' size = '3rem'/></a>
              <a href="https://github.com/silentknight2001"><Github color='white' size = '3rem'/></a>
          </div>

          
          </div>

      </div>


  )
}

export default Footer