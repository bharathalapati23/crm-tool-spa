import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import EnquiryTable from "./EnquiryTable";
import * as api from "../../api";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: "80px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px",
    },
    width: "100%",
    maxWidth: "1300px",
    justifyContent: "center",
    flexDirection: "column",
    margin: "auto",
  },
}));

const HomePage = () => {
  const classes = useStyles();

  const [enquiries, setEnquiries] = React.useState([]);
  React.useEffect(() => {
    api.getEnquiries().then((result) => {
      setEnquiries(result.data);
    });
  }, []);

  return (
    <div className={classes.root}>
      <EnquiryTable enquiries={enquiries} />
    </div>
  );
};

export default HomePage;
