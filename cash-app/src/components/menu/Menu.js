import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {StyledMenu} from './Menu.styled';
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const Menu = ({open}) => {
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

      const classes = useStyles();
  const preventDefault = (e) => e.preventDefault();
    return (
        <StyledMenu open={open}>
             <Typography
                variant="h6"
                className={classes.title}
                style={{  color: '#fff' }}
              >
                <Link
                  href="#"
                  onClick={preventDefault}

                  style={{  fontSize: 15, color: '#fff', zIndex: 10000000 }}
                >
                  NEWS
                </Link>
                <Link
                  href="#"
                  onClick={preventDefault}
                  style={{  color: '#fff',fontSize: 15 }}
                >
                  ABOUT US
                </Link>
                <Link
                  href="#"
                  onClick={preventDefault}
                  style={{  color: '#fff', fontSize: 15 }}
                >
                  ABOUT US
                </Link>
                <Link
                  href="#"
                  onClick={preventDefault}
                  style={{  color: '#fff', fontSize: 15 }}
                >
                  ABOUT US
                </Link>
                <Link
                  href="#"
                  onClick={preventDefault}
                  style={{ color: '#fff', fontSize: 15 }}
                >
                  ABOUT US
                </Link>
              </Typography>
        </StyledMenu>
    )
}

export default Menu;