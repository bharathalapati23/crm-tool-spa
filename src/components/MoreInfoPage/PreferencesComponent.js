import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";

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

const locations = [
  "Eshwar Nagar",
  "Ananth Nagar",
  "Syndicate Circle",
  "End Point Road",
  "Coin Circle",
];

const PreferencesComponent = ({
  budget,
  configuration,
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

      <FormControl
        variant="filled"
        sx={{ minWidth: 140 }}
        className={classes.field}
      >
        <InputLabel>Configuration</InputLabel>
        <Select value={configuration} onChange={changeConfig}>
          <MenuItem value={"1 BHK"}>&nbsp; 1 BHK</MenuItem>
          <MenuItem value={"2 BHK"}>&nbsp; 2 BHK</MenuItem>
          <MenuItem value={"3 BHK"}>&nbsp; 3 BHK</MenuItem>
        </Select>
      </FormControl>

      {/* <ZoneSelect
        // className={classes.field}
        location={location}
        changeLocation={changeLocation}
      /> */}
      <FormControl
        variant="filled"
        sx={{ minWidth: 140 }}
        className={classes.field}
      >
        <InputLabel>Location</InputLabel>
        <Select multiple={true} value={location} onChange={changeLocation}>
          {locations.map((loc) => (
            <MenuItem
              key={loc}
              value={loc}
              // style={getStyles(name, location, theme)}
            >
              &nbsp; {loc}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default PreferencesComponent;
