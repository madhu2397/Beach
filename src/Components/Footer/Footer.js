import React from "react";
import { SocialIcon } from 'react-social-icons';
const Footer = ({ children,url }) => {
  return (
    <div className="Footer">
        
     <SocialIcon id="soc1" url="http://twitter.com/jaketrent"/>
     <SocialIcon id="soc2" url="http://linkedin.com/in/jaketrent" />
     <SocialIcon id="soc3" url="https://www.facebook.com/" />
     <div>
       <p>Copyright © 2020 &nbsp;</p> 
       </div> 
    

    </div>
  );
};

export default Footer;
