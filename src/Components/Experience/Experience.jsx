import React, {useContext} from "react";
import { themeContext } from "../../Context";
import "./Experience.css";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id="Experience">
      <div className="achievement">
        <div className="circle" style = {{background : darkMode? 'var(--orange)' : ''}}>2+</div>
        <span style = {{color: darkMode? 'white' : ''}}> Years </span>
        <span> Experience </span>
      </div>
      <div className="achievement">
        <div className="circle" style={{background : darkMode? 'var(--orange)' : ''}}>10+</div>
        <span style={{color : darkMode? 'white' : ''}}>Completed</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{background: darkMode? 'var(--orange)':''}}>1+</div>
        <span style={{color: darkMode? 'white': ''}}> Companies</span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
