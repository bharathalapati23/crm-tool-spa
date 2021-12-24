import React from "react";
import ByAssigned from "./FilterByAssigned";
import ByStatus from "./FilterByStatus";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "poppins",
  },
  filters: {
    display: "flex",
    flexDirection: "row",
    // width: "60%",
    justifyContent: "space-around",
    alignItems: "center",
    fontFamily: "poppins",
    margin: "3%",

    [theme.breakpoints.between("xs", "md")]: {
      width: "80%",
      margin: "5%",
      flexDirection: "column",
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
        <ByAssigned
          assigned={assigned}
          handleAssignedChange={handleAssignedChange}
        />
        <ByStatus status={status} handleStatusChange={handleStatusChange} />
      </div>
    </div>
  );
}
