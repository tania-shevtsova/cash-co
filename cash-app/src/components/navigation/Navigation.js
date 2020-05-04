import React from "react";
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

const Navigation = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <AppBar position="static" style={{backgroundColor: 'inherit'}}>
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
          <Link href="#" onClick={preventDefault} style={{color: '#696969', marginRight: 30}} >
              NEWS
              </Link>
          <Link href="#" onClick={preventDefault} style={{color: '#696969', marginRight: 30}} >
              ABOUT US
              </Link>
              <Link href="#" onClick={preventDefault} style={{color: '#696969', marginRight: 30}}>
              ABOUT US
              </Link>
              <Link href="#" onClick={preventDefault} style={{color: '#696969', marginRight: 30}}>
              ABOUT US
              </Link>
              <Link href="#" onClick={preventDefault} style={{color: '#696969'}} >
              ABOUT US
              </Link>
           
          </Typography>
          <Button style={{color: '#696969'}}>Sign in</Button>
          <Button style={{color: '#696969'}}>Sign up</Button>
        </Toolbar>
      </Container>
      </div>
    </AppBar>

 
  );
};

export default Navigation;
