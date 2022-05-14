import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Works for All These
        </span>
        <span>Brands & Clients</span>
        <spane>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
          <br />
          Lorem ipsum dolor sit, amet consectetur.
          <br />
          Lorem ipsum dolor sit, amet consectetur.sdfg frtgf nigeria
          <br />
          Lorem ipsum dolor sit, amet consectetur.
        </spane>
        <button className="button s-button">Hire me</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}

      <div className="w-right">
        <div className="w-mainCircle">
          <motion.div 
          initial={{ rotate: 180 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3, type: "spring" }}
          className="w-secCircle">
            <img src={Upwork} alt="" />
          </motion.div>
          <motion.div 
          initial={{ rotate: 180 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3, type: "spring" }}
          className="w-secCircle">

            <img src={Fiverr} alt="" />
          </motion.div>
          <motion.div 

          initial={{ rotate: 180 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3, type: "spring" }}
          
          className="w-secCircle">
            <img src={Amazon} alt="" />
          </motion.div>{" "}
          <motion.div 
          initial={{ rotate: 180 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3, type: "spring" }}
          className="w-secCircle">
            <img src={Shopify} alt="" />
          </motion.div>
          <motion.div
          initial={{ rotate: 180 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3, type: "spring" }}
          
          className="w-secCircle">
            <img src={Facebook} alt="" />
          </motion.div>
        </div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
     </div>
  );
};

export default Works;
