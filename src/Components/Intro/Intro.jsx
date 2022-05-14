import React,{useContext} from 'react'
import './Intro.css'
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import boy from "../../img/boyy.png"
import thumbup from "../../img/thumbup.png"
import Crown from "../../img/crown.png"
import Reaact from "../../img/react.png"
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';



export const Intro = () => {
    const transition = {duration: 2, type: 'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
      <div className="intro">
          <div className="i-left">
              <div className="i-name">
                  <span style={{color : darkMode? 'white' : ''}}> Hy! I Am </span>
                   <span>Nayan Biswas </span>
                   <span> Frontend Developer with high level of exprence in web designing and development, Production the Quality work </span>
              </div>
              <button className="button i-button">Hire me</button>
              <div className="i-icon">
                  <a href="https://github.com/silentknight2001"><img src={Github} alt=""/> </a>
                  <a href="https://www.linkedin.com/feed/"><img src={LinkedIn} alt=""/></a>
                  <a href="https://www.instagram.com/nayan_web_developer/"> <img src={Instagram} alt=""/></a>
              </div>
          </div>
          <div className="i-right">
              <div className="boy"
              style={{border: darkMode? '5px solid yellow' : ''}}
              > 
              <img src={boy} alt="" />
              </div>
              <motion.img 
              initial={{left: '-39%'}}
              whileInView ={{left: '-27%'}}
              transition = {transition}
              src={Reaact} alt="" />
              <motion.div
              initial={{top: '-4%', left: '74%'}}
              whileInView={{left: '70%'}}
              transition = {transition}
              style={{ top:'-4%',left: '68%', transform: 'scale(.6)'}}
              className="Floating-div"
              
              >
                  <FloatingDiv image = {Crown} text1= "Web" text2 = "Developer" />
              </motion.div>
              <motion.div
              initial={{left:'-26%'}}
              whileInView={{left: '-1%'}}
              transition={transition}
              style={{top: '12.4rem', left:'1.3rem'}}
              className="floating-div"
              >
                  <FloatingDiv image={thumbup} text1="MERN" text2="STACK" />
              </motion.div>
              {/*..... blur effect...........  */}
              <div className="blur" style={{background:"rgba(238 210 255)"}}></div>
          </div>
          <div className="blur" style={{background:"#C1F5FF", 
          top:'17rem', 
          width:'21rem',
          height:'11rem', 
          left:'-9rem'
          }}></div>
      </div>
  )
}
