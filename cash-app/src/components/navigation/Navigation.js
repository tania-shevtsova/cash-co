import React, { useEffect, useRef, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "@material-ui/core/Link";
// import Menu from "@material-ui/core/Menu";
import SvgIcon from "@material-ui/core/SvgIcon";
import "./Navigation.css";
import {StyledMenu} from '../menu/Menu.styled';


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
  const [isActive, setActive] = useState("inactive");

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

  return (
    <div className={`sticky-wrapper${isSticky ? "sticky" : ""}`}>
      <AppBar
     
        style={{ backgroundColor: "#fff" }}
        className="menu-sticky"
        ref={ref}
      >
        <div
          style={{
            display: "flex",
            direction: "row",
            justifyContent: "space-between",
          }}
        >

<Menu {...props}>
<Typography
                variant="h6"
                className={classes.title}
                style={{  color: '#fff' }}
              >
                <Link
                  href="#"
                  onClick={preventDefault}

                  style={{ paddingTop: 15,  fontSize: 15, color: '#fff', display: 'block' }}
                >
                  NEWS
                </Link>
                <Link
                  href="#"
                  onClick={preventDefault}
                  style={{  color: '#fff',fontSize: 15, display: 'block' }}
                >
                  ABOUT US
                </Link>
                <Link
                  href="#"
                  onClick={preventDefault}
                  style={{  color: '#fff', fontSize: 15, display: 'block' }}
                >
                  ABOUT US
                </Link>
                <Link
                  href="#"
                  onClick={preventDefault}
                  style={{  color: '#fff', fontSize: 15, display: 'block' }}
                >
                  ABOUT US
                </Link>
                <Link
                  href="#"
                  onClick={preventDefault}
                  style={{ color: '#fff', fontSize: 15, display: 'block'}}
                >
                  ABOUT US
                </Link>
              

              <button
                onClick={handleToggle}
                className={`${
                  isActiveSignIn? "active" : "inactive"
                } nav-btn1 `}
              >
                SIGN IN
              </button>
              <button
                onClick={handleToggle}
                className={`${
                  isActiveSignIn? "inactive" : "active"
                } nav-btn2 `}
              >
                SIGN UP
              </button>
              </Typography>
             
</Menu>



{/* <StyledMenu open={open}> */}
  {/* <div className='layer'> */}
             {/* <Typography
                variant="h6"
                className={classes.title}
                style={{  color: '#fff' }}
              >
                <Link
                  href="#"
                  onClick={preventDefault}

                  style={{ paddingTop: 15,  fontSize: 15, color: '#fff', display: 'block' }}
                >
                  NEWS
                </Link>
                <Link
                  href="#"
                  onClick={preventDefault}
                  style={{  color: '#fff',fontSize: 15, display: 'block' }}
                >
                  ABOUT US
                </Link>
                <Link
                  href="#"
                  onClick={preventDefault}
                  style={{  color: '#fff', fontSize: 15, display: 'block' }}
                >
                  ABOUT US
                </Link>
                <Link
                  href="#"
                  onClick={preventDefault}
                  style={{  color: '#fff', fontSize: 15, display: 'block' }}
                >
                  ABOUT US
                </Link>
                <Link
                  href="#"
                  onClick={preventDefault}
                  style={{ color: '#fff', fontSize: 15, display: 'block'}}
                >
                  ABOUT US
                </Link>
              

              <button
                onClick={handleToggle}
                className={`${
                  isActiveSignIn? "active" : "inactive"
                } nav-btn1 `}
              >
                SIGN IN
              </button>
              <button
                onClick={handleToggle}
                className={`${
                  isActiveSignIn? "inactive" : "active"
                } nav-btn2 `}
              >
                SIGN UP
              </button>
              </Typography>
              */}
              {/* </div> */}
              {/* </StyledMenu> */}
          {/* <Container maxWidth="xs" disableGutters={true} style={{ margin: 0 }}> */}
            {/* <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                style={{ color: "#696969" }}
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            </Toolbar> */}
          {/* </Container> */}
          {/* <Container maxWidth="md" disableGutters={true} style={{ margin: 0 }}>
            <Toolbar> */}
              {/* <Typography
                variant="h6"
                className={classes.title}
                style={{ color: "#696969" }}
              >
                <Link
                  href="#"
                  onClick={preventDefault}
                  style={{ color: "#696969", marginRight: 30, fontSize: 15 }}
                >
                  NEWS
                </Link>
                <Link
                  href="#"
                  onClick={preventDefault}
                  style={{ color: "#696969", marginRight: 30, fontSize: 15 }}
                >
                  ABOUT US
                </Link>
                <Link
                  href="#"
                  onClick={preventDefault}
                  style={{ color: "#696969", marginRight: 30, fontSize: 15 }}
                >
                  ABOUT US
                </Link>
                <Link
                  href="#"
                  onClick={preventDefault}
                  style={{ color: "#696969", marginRight: 30, fontSize: 15 }}
                >
                  ABOUT US
                </Link>
                <Link
                  href="#"
                  onClick={preventDefault}
                  style={{ color: "#696969", fontSize: 15 }}
                >
                  ABOUT US
                </Link>
              </Typography> */}
              {/* <button
                onClick={handleToggle}
                className={`${
                  isActiveSignIn? "active" : "inactive"
                } nav-btn1 `}
              >
                SIGN IN
              </button>
              <button
                onClick={handleToggle}
                className={`${
                  isActiveSignIn? "inactive" : "active"
                } nav-btn2 `}
              >
                SIGN UP
              </button> */}
            {/* </Toolbar>
          </Container> */}
        </div>
      
      </AppBar>
    </div>
  );
};

export default Navigation;
