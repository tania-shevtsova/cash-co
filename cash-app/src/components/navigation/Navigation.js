import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
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
  return (
    <AppBar position="static" >
            <div style={{display: 'flex', direction: "row", justifyContent: 'space-between'}}>

      <Container
        maxWidth="sm"
        disableGutters={true}
        style={{margin: 0}}
      >
           <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        </Toolbar>
      </Container>
      <Container
        maxWidth="xs"
        disableGutters={true}
        style={{margin: 0}}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </Container>
      </div>
    </AppBar>

 
  );
};

export default Navigation;
