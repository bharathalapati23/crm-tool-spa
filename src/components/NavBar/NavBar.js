import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function NavBar() {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");
  let history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);

  useEffect(() => {
    setAnchorEl(null);
  }, [isMobile]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigateToHome = () => {
    history.push("/");
    handleClose();
  };

  const navigateToNewEnquiry = () => {
    history.push("/new-enquiry");
    handleClose();
  };

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          {!isMobile && (
            <>
              <Button color="inherit" onClick={navigateToHome}>
                Home
              </Button>
              <Button color="inherit" onClick={navigateToNewEnquiry}>
                New Enquiry
              </Button>
            </>
          )}
          {isMobile && (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon onClick={handleClick} />
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={navigateToHome}>Home</MenuItem>
                <MenuItem onClick={navigateToNewEnquiry}>New Enquiry</MenuItem>
              </Menu>
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
