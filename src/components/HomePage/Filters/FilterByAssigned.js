import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
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
export default function ByAssigned({ assigned, handleAssignedChange }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FilterListOutlinedIcon />
      <FormControl variant="filled" sx={{ minWidth: 140 }}>
        <InputLabel>By Assigned</InputLabel>
        <Select
          value={assigned}
          onChange={(e) => handleAssignedChange(e.target.value)}
        >
          <MenuItem value={"Aditya"}>&nbsp; Aditya</MenuItem>
          <MenuItem value={"Sampat"}>&nbsp; Sampat</MenuItem>
          <MenuItem value={"Thomson"}>&nbsp; Thomson</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
