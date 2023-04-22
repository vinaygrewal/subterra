import React from "react";
import "./Last.css";
const Last = () => {
  return (
    <section id="footer">
      
        
          <div className="left">
            <div >
              <img src="./image1/Vector.png" className="vector" alt="vector" />
              <div className="mid-logo">
                <span className="mid-logo-name">SUBTERRA:</span>
                <br />
                <span className="mid-logo-digits">2044</span>
              </div>
            </div>
            <div className="leftcontent">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis enim
            corrupti repellat mollitia quae, voluptates rem, illo reiciendis
            quas, asperiores alias placeat dolor illum.
          </div>
          <div className="image">
            <span><img src="./image1/twitter.png" alt="" className="leftimg"/></span>
            <span><img src="./image1/instagram.png" alt="" className="leftimg"/></span>
            <span><img src="./image1/fb.png" alt="" className="leftimg"/></span>
          </div>
          </div>
         
          <div className="mid"></div>
          <div className="right">
            <h1>MAIN MENU</h1>
            <ul>
              <li>home</li>
              <li>home</li>
              <li>home</li>
              <li>home</li>
              <li>home</li>
              
            </ul>
          </div>
           <div className="right-most">
            <h1>lINKS</h1>
            <ul>
              <li>home</li>
              <li>home</li>
              <li>home</li>
            </ul>
          </div> 
       
      
      <div className="bottom">
        <img src="./image1/footer.png" alt="" />
      </div>
      <span className="copy">Subterra:2044©. All Rights Reserved.</span>
    </section>
    
  );
};

export default Last;
