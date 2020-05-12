import React, { useEffect, useRef, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import {FaArrowCircleUp} from 'react-icons/fa';
// import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import Link from "@material-ui/core/Link";
// import Menu from "@material-ui/core/Menu";
// import SvgIcon from "@material-ui/core/SvgIcon";
import "./Navigation.css";
// import { StyledMenu } from "../menu/Menu.styled";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Footer from '../footer/Footer'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navigation = (props) => {
  const classes = useStyles();
  const preventDefault = (e) => e.preventDefault();
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);

  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  let [isActiveSignIn, setActiveSignIn] = useState("inactive");

  const handleToggle = (e) => {
    e.preventDefault();

    setActiveSignIn(e.target.className.includes("nav-btn1"));
    
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);
const [open, setOpen] = useState(false);

const [isVisible, setVisible] = useState(false);

useEffect(() => {
  window.addEventListener("scroll", toggleVisibility);
  return () => {
    window.removeEventListener("scroll", () => toggleVisibility);
  };
}, []);
const toggleVisibility=()=>{
  if (window.pageYOffset > 50) {
    setVisible(true);
  } else {
    setVisible(false);
  }
}

const scrollToTop=()=>{
  window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
}
  return (
    <div className='main-nav-wrapper'>
      {isVisible && <FaArrowCircleUp 
   className="return-to-top" 
   onClick={scrollToTop} 
   style={{height: 40, display:'flex'}}
/>}
    <div className={`sticky-wrapper${isSticky ? "sticky" : ""}`}>
      <section className='section-content'> <h3>Lorem, ipsum dolor sit !</h3></section>
      <a className='btn-online' onClick={(e)=>{return e.target.style.backgroundColor= '#fff', e.target.style.color='#696969'}}>Online booking</a>

      <AppBar
        style={{ backgroundColor: "inherit",  height: 60}}
        className="menu-sticky"
        ref={ref}
      >
         <h2
            style={{
              position: "absolute",
              zIndex: 120,
              left: "50%",
              top: '28%',
              color: 'red'
            }}
          >
            CASH APP
          </h2>
         
        <div
          style={{
            display: "flex",
            direction: "row",
            justifyContent: "space-between",
          }}
          className='newDiv'
        >

          <Menu  
          onStateChange={(state)=>setOpen(state.isOpen)} 
            isOpen={open} 
            
          >
            <Typography
              variant="h6"
              className={classes.title}
              style={{ color: "#fff" }}
            >
              <AnchorLink
              className='link first-child'
                href="#news"
                onClick={()=>{setOpen(false)}}
              >
                NEWS
              </AnchorLink>
              <AnchorLink
               className='link'
                href="#about-us"
                onClick={()=>{setOpen(false)}}
              >
                ABOUT US
              </AnchorLink>
              <AnchorLink
               className='link'
                href="#about-us2"
                onClick={()=>{setOpen(false)}}
              >
                ABOUT US
              </AnchorLink>
              <AnchorLink
               className='link'
                href="#about-us3"
                onClick={()=>{setOpen(false)}}
              >
                ABOUT US
              </AnchorLink>
              <AnchorLink
               className='link'
                href="#about-us4"
                onClick={()=>{setOpen(false)}}
              >
                ABOUT US
              </AnchorLink>

              <button
                onClick={handleToggle}
                className={`${
                  isActiveSignIn ? "active" : "inactive"
                } nav-btn1 `}
              >
                SIGN IN
              </button>
              <button
                onClick={handleToggle}
                className={`${
                  isActiveSignIn ? "inactive" : "active"
                } nav-btn2 `}
              >
                SIGN UP
              </button>
            </Typography>
          </Menu>
         

        </div>
      </AppBar>
     
    </div>
    </div>
  );
};

export default Navigation;
