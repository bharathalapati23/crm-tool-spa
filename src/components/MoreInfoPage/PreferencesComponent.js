import React from "react";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import { TextField, Typography } from "@material-ui/core";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
  },
  field: {
    marginTop: "1vh",
    marginBottom: "1vh",
  },
}));

const PreferencesComponent = ({
  budget,
  config,
  location,
  changeBudget,
  changeConfig,
  changeLocation,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        variant="h7"
        style={{ fontWeight: "bolder", marginBottom: "1vh" }}
      >
        PREFERENCES
      </Typography>
      <TextField
        label="Budget"
        variant="filled"
        value={budget}
        className={classes.field}
        onChange={changeBudget}
      />
      <TextField
        label="Configuration"
        variant="filled"
        value={config}
        className={classes.field}
        onChange={changeConfig}
      />
      <TextField
        label="Location"
        variant="filled"
        value={location}
        className={classes.field}
        onChange={changeLocation}
      />
    </div>
  );
};

export default PreferencesComponent;
