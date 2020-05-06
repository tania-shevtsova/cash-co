import React from 'react'
import {StyledBurger} from './Burger.styles'
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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
const Burger = ({open, setOpen}) => {
      const classes = useStyles();
    return (
        <StyledBurger   open={open} 
        onClick={()=>setOpen(!open)}>
            <div/>
            <div/>
            <div/>
            

        {/* <Toolbar>
        <IconButton
          open={open} 
          onClick={()=>setOpen(!open)}
          edge="start"
          className={classes.menuButton}
          style={{ color: "#696969", zIndex: 1222222 }}
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar> */}
      </StyledBurger>
    )
}

export default Burger;