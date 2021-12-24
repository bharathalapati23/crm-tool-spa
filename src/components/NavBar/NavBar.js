import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Menu from "@material-ui/core/Menu";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  navbar: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  userDropDown: {
    width: "140px",
    backgroundColor: "#f7f7ff",
    borderRadius: "5px",
    color: "white",
  },
}));

function NavBar({ userName, changeUserName }) {
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
            <div className={classes.navbar}>
              <div className={classes.navLeft}>
                <Button color="inherit" onClick={navigateToHome}>
                  Home
                </Button>
                <Button color="inherit" onClick={navigateToNewEnquiry}>
                  New Enquiry
                </Button>
              </div>
              <FormControl
                variant="filled"
                sx={{ minWidth: 200 }}
                className={classes.userDropDown}
              >
                <InputLabel>User</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={userName}
                  onChange={changeUserName}
                >
                  <MenuItem value={"A"}>&nbsp; A</MenuItem>
                  <MenuItem value={"B"}>&nbsp; B</MenuItem>
                  <MenuItem value={"C"}>&nbsp; C</MenuItem>
                  <MenuItem value={"D"}>&nbsp; D</MenuItem>
                  <MenuItem value={"E"}>&nbsp; E</MenuItem>
                </Select>
              </FormControl>
            </div>
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
                <FormControl
                  variant="filled"
                  sx={{ minWidth: 200 }}
                  className={classes.userDropDown}
                >
                  <InputLabel>User</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={userName}
                    onChange={changeUserName}
                  >
                    <MenuItem value={"A"}>&nbsp; A</MenuItem>
                    <MenuItem value={"B"}>&nbsp; B</MenuItem>
                    <MenuItem value={"C"}>&nbsp; C</MenuItem>
                    <MenuItem value={"D"}>&nbsp; D</MenuItem>
                    <MenuItem value={"E"}>&nbsp; E</MenuItem>
                  </Select>
                </FormControl>
              </Menu>
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
