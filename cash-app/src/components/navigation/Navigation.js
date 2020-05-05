import React, {useEffect, useRef, useState} from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Link from '@material-ui/core/Link';
import Menu from "@material-ui/core/Menu";
import SvgIcon from "@material-ui/core/SvgIcon";
import './Navigation.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
  },
}));

const Navigation = () => {
  const classes = useStyles();
  const preventDefault = (e) => e.preventDefault();
  const [isSticky, setSticky]=useState(false);
  const ref=useRef(null);
  const handleScroll=()=>{
      if(ref.current){
          setSticky(ref.current.getBoundingClientRect().top<=0)
      }
  };

  const [isActive, setActive]=useState('inactive');
  const [isActiveSignIn, setActiveSignIn]=useState('inactive');



  useEffect(()=>{
      window.addEventListener('scroll', handleScroll);
      return ()=>{
          window.removeEventListener('scroll', ()=>handleScroll)
      }
  }, []);

  return (
      <div className={`sticky-wrapper${isSticky? 'sticky': ''}`}>
    <AppBar style={{backgroundColor: '#fff'}} className='menu-sticky' ref={ref}>
            <div style={{display: 'flex', direction: "row", justifyContent: 'space-between'}}>


      <Container
        maxWidth="xs"
        disableGutters={true}
        style={{margin: 0}}
      >
           <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          style={{color: "#696969"}}
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        </Toolbar>
      </Container>
      <Container
        maxWidth="md"
        disableGutters={true}
        style={{margin: 0}}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title} style={{color: '#696969'}}> 
          <Link href="#" onClick={preventDefault} style={{color: '#696969', marginRight: 30, fontSize: 15}} >
              NEWS
              </Link>
          <Link href="#" onClick={preventDefault} style={{color: '#696969', marginRight: 30, fontSize: 15}} >
              ABOUT US
              </Link>
              <Link href="#" onClick={preventDefault} style={{color: '#696969', marginRight: 30, fontSize: 15}}>
              ABOUT US
              </Link>
              <Link href="#" onClick={preventDefault} style={{color: '#696969', marginRight: 30, fontSize: 15}}>
              ABOUT US
              </Link>
              <Link href="#" onClick={preventDefault} style={{color: '#696969', fontSize: 15}} >
              ABOUT US
              </Link>
           
          </Typography>
          {/* <div style={{backgroundColor: isActive}}>
          <button  onClick={()=>{setActive('#696969')}} >SIGN IN</button>
          <button   onClick={()=>{setActiveSignIn('aqua')}} >SIGN UP</button>
          </div> */}
          <button onClick={(e)=>{e.preventDefault(); setActiveSignIn(!isActiveSignIn)}} className={`  ${isActiveSignIn?'active' : 'inactive'} nav-btn`}>SIGN IN</button>
          <button onClick={()=>{setActiveSignIn(!isActiveSignIn)}} className={` ${isActiveSignIn?'inactive' : 'active'} nav-btn `}>SIGN UP</button>
        </Toolbar>
      </Container>
      </div>
    </AppBar>
    </div>

 
  );
};

export default Navigation;