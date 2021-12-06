import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, Select } from "@mui/material";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function ByStatus({ status, handleStatusChange }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FilterListOutlinedIcon />
      <FormControl variant="filled" sx={{ minWidth: 140 }}>
        <InputLabel>By Status</InputLabel>
        <Select
          value={status}
          onChange={(e) => handleStatusChange(e.target.value)}
        >
          <MenuItem value={"Enquired"}>&nbsp; Enquired</MenuItem>
          <MenuItem value={"Connected"}>&nbsp; Connected</MenuItem>
          <MenuItem value={"Qualified"}>&nbsp; Qualified</MenuItem>
          <MenuItem value={"Viewing"}>&nbsp; Viewing</MenuItem>
          <MenuItem value={"Closed"}>&nbsp; Closed</MenuItem>
          <MenuItem value={"Dropped"}>&nbsp; Dropped</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
