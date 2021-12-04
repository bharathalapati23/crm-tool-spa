import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";

const zones = [
  {
    label: "Eshwar Nagar",
    checked: false,
    name: "Eshwar Nagar",
  },
  {
    label: "Ananth Nagar",
    checked: false,
    name: "Ananth Nagar",
  },
  {
    label: "Syndicate Circle",
    checked: false,
    name: "Syndicate Circle",
  },
  {
    label: "End Point Road",
    checked: false,
    name: "End Point Road",
  },
  {
    label: "Coin Circle",
    checked: false,
    name: "Coin Circle",
  },
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "left",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "left",
  },
  getContentAnchorEl: null,
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const useStyles = makeStyles((theme) => ({
  sortSelect: {
    width: "100%",
    height: "56px",
    marginTop: "5px",
    fontFamily: "poppins",
    fontSize: "14px",
    color: "black",
    border: "solid",
    borderColor: "rgba(0, 0, 0, 0.23)",
    borderWidth: "thin",
    // backgroundColor: "transparent",
    paddingLeft: "5px",
    borderRadius: "5px",
    "& option": {
      backgroundColor: "#black",
    },
    "& li": {
      fontSize: "20px",
    },
    "&:hover": {
      borderRadius: 1,
      borderColor: "#fffff",
      boxShadow: "0 0 0 0.1rem rgba(255,255,255,1)",
    },
  },
}));

const ZoneSelect = ({ location, changeLocation }) => {
  const classes = useStyles();
  //   const personName = enquiryForm.preferredZones;
  //   const handleChange = (event) => {
  //     setEnquiryForm({ ...enquiryForm, preferredZones: event.target.value });
  //   };

  return (
    <Select
      labelId="demo-mutiple-checkbox-label"
      id="demo-mutiple-checkbox"
      multiple
      disableUnderline
      input={<Input />}
      renderValue={(selected) => selected.join(", ")}
      MenuProps={MenuProps}
      value={location}
      onChange={changeLocation}
      className={classes.sortSelect}
    >
      {zones.map((zone) => (
        <MenuItem key={zone.name} value={zone.name}>
          <Checkbox checked={location.indexOf(zone.name) > -1} />
          <ListItemText primary={zone.name} />
        </MenuItem>
      ))}
    </Select>
  );
};

export default ZoneSelect;
