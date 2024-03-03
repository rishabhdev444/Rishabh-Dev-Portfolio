import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import '../App.css'
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import {
    FiGithub,
    FiTwitter,
    FiLinkedin,
  } from "react-icons/fi";
  
  import { FaGoogle } from "react-icons/fa6";
  const socialLinks = [
    {
      id: 1,
      icon: <FiGithub />,
      url: "https://github.com/rishabhdev444",
    },
    {
      id: 2,
      icon: <FiTwitter />,
      url: "https://twitter.com/rishabhdev444",
    },
    {
      id: 3,
      icon: <FiLinkedin />,
      url: "https://www.linkedin.com/in/rishabhdev444",
    },
    {
      id: 4,
      icon: <FaGoogle />,
      url: "rishabhdev444@gmail.com",
    },
  ];


const FooterCard = ({
}) => (
    <motion.div variants={fadeIn("up", "spring",  0.25, 0.75)}>
             
<div className="container mx-auto">
    <div className="bg-black-200 rounded-[20px] dark:border-secondary-dark p-5">
      {/* Footer social links */}
      <div className="font-general-regular flex flex-col justify-center items-center">
          <h3 className={styles.sectionHeadText}>Follow me.</h3>
         
        <ul className="flex mt-5 gap-4 sm:gap-8">
          {socialLinks.map((link) => (
             <Tilt
             options={{
               max: 45,
               scale: 1,
               speed: 450,
             }}> 
            <a
              href={link.url}
              target="__blank"
              key={link.id}
              className={`w-20 h-20 flex items-center justify-center overflow-hidden rounded-full container-${link.id} scale-90 duration-200`}
            >
              <i className="text-xl sm:text-2xl md:text-4xl">{link.icon}</i>
            </a>
            </Tilt>
          ))}
          
        </ul>
       
      </div>
    </div>
</div>
</motion.div>
);

const Footer = () => {
  return <FooterCard/>;
};

export default SectionWrapper(Footer, "footer");