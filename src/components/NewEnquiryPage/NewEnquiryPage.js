import React from "react";
import { TextField, Typography, Paper, Button } from "@material-ui/core";
import * as api from "../../api";
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

const initialConfig = {
  name: "",
  phoneNo: "",
  comment: "",
  source: "",
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    height: "70vh",
    [theme.breakpoints.up("xs")]: {
      width: "90vw",
    },
    [theme.breakpoints.up("sm")]: {
      width: "70vw",
    },
    [theme.breakpoints.up("md")]: {
      width: "50vw",
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: "5px",
    paddingBottom: "10px",
    paddingTop: "10px",
    backgroundColor: "#ffffff",
    opacity: "0.",
  },
  textFieldStyles: {
    width: "95%",
    backgroundColor: "black",
    borderRadius: "3px",
    margin: "2px",
    padding: "0",
  },
  buttonSubmit: {
    width: "100%",
    marginTop: "5px",
    marginBottom: "2px",
    textDecoration: "none",
    backgroundColor: "#e63946",
  },
}));

const NewEnquiryPage = () => {
  const classes = useStyles();
  const [postData, setPostData] = React.useState(initialConfig);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(postData);
    api.createEnquiry(postData);
    setPostData(initialConfig);
  };

  return (
    <div className={classes.root}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h5">CREATE AN ENQUIRY</Typography>
        <TextField
          className={classes.textFieldStyle}
          name="name"
          variant="outlined"
          label="Name"
          fullWidth
          value={postData.name}
          onChange={(e) => setPostData({ ...postData, name: e.target.value })}
          required
        />
        <TextField
          className={classes.textFieldStyle}
          type="number"
          name="phoneNo"
          variant="outlined"
          label="Phone Number"
          fullWidth
          required
          value={postData.phoneNo}
          onChange={(e) =>
            setPostData({ ...postData, phoneNo: e.target.value })
          }
        />
        {/* <TextField
          className={classes.textFieldStyle}
          name="comment"
          variant="outlined"
          label="Comment"
          fullWidth
          multiline
          rows={4}
          required
          value={postData.comment}
          onChange={(e) =>
            setPostData({ ...postData, comment: e.target.value })
          }
        /> */}
        <TextField
          className={classes.textFieldStyle}
          name="source"
          variant="outlined"
          label="Source"
          fullWidth
          required
          value={postData.source}
          onChange={(e) => setPostData({ ...postData, source: e.target.value })}
        />
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
          disabled={
            !postData.name ||
            !postData.phoneNo ||
            // !postData.comment ||
            !postData.source
          }
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default NewEnquiryPage;
