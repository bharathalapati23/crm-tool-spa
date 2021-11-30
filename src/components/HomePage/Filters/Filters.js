import React from "react";
import ByAssined from "./ByAssined";
import ByStatus from "./ByStatus";
import { makeStyles, createTheme } from "@material-ui/core/styles";

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
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "poppins",
  },
  filters: {
    display: "flex",
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-around",
    alignItems: "center",
    fontFamily: "poppins",
    margin: "3%",

    [theme.breakpoints.between("xs", "md")]: {
      width: "80%",
      margin: "5%",
    },
  },
}));

export default function Filters({
  assigned,
  handleAssignedChange,
  status,
  handleStatusChange,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.filters}>
        <ByAssined
          assigned={assigned}
          handleAssignedChange={handleAssignedChange}
        />
        <ByStatus status={status} handleStatusChange={handleStatusChange} />
      </div>
    </div>
  );
}
