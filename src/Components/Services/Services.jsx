import React, {useContext} from 'react'
import "./Services.css"
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import {themeContext} from "../../Context";
import { motion } from 'framer-motion'
import Resume from './Resume.pdf'



const Services = () => {
  const transition = {duration: 3, type: 'spring',}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
      <div className="services" id='Services'>
          {/* left side */}
          <div className="awesome">
              <span style={{color: darkMode? 'white' : ''}}>My Awesome</span>
              <span>Services</span>
              <spane>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
                  <br/>
                  Lorem ipsum dolor sit, amet consectetur.
              </spane>
              <a href={Resume} download> 
              <button className="button s-button">Download CV</button>
              </a>
              <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>

          </div>
          
          {/* right side */}
          {/* first card */}

          <div className="cards">
            <motion.div
             initial={{ left: "25rem" }}
             whileInView={{ left: "14rem" }}
             transition={transition}

            
            style={{left:'14rem'}}> 
              <Card
                emoji = {HeartEmoji}
                heading ={"Design"}
                detail = {"Lorem ipsum dolor sit amet consectetur."}
              />
            </motion.div>
            {/* second  card */}
            <motion.div

            initial = {{left: '-11rem' ,top:'12rem'}}
            whileInView = {{left: '-4rem'}}
            transition={transition}
            style={{top:'12rem',left:'-4rem' }}>
                <Card
                emoji={Glasses}
                heading={"Developer"}
                detail={"HTML, CSS, JAVASCRIPT, REACT (MERN)"}
                />
            </motion.div>
            
            {/* 3rd card */}

            <motion.div
            initial = {{top:'19rem', left: '25rem'}}
            whileInView={{left: "12rem"}}
            transition= {transition}
            
            style={{top:'19rem', left:'12rem'}}>
                <Card
                emoji={Humble}
                heading={"Technology"}
                detail= {"GIT&GITHUB, DOCKER,MYSQ, MONGODB,PSQL, LINUX,PYTHON"} 
                />

            </motion.div>
            <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
              
          </div>
      </div>
  )
}

export default Services