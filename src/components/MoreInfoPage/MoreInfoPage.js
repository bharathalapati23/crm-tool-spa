import React from "react";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import { useLocation, useHistory } from "react-router-dom";
import {
  FormControl,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Button,
} from "@material-ui/core";
import * as api from "../../api";
import PreferencesComponent from "./PreferencesComponent";

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
    display: "flex",
    marginTop: "80px",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  enquiry: {
    [theme.breakpoints.between("xs", "sm")]: {
      width: "80%",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "60%",
    },
    marginTop: "5vh",
    width: "40%",
    display: "flex",
    flexDirection: "column",
  },
  field: {
    marginTop: "1vh",
    marginBottom: "1vh",
  },
  comments: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  commentsField: {
    marginTop: "1vh",
    marginBottom: "1vh",
    width: "30%",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "14px",
    },
  },
  commentList: {
    fontSize: "18px",
    fontWeight: "bolder",
    fontStyle: "italic",
    width: "70%",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "14px",
    },
  },
  buttonSubmit: {
    width: "100%",
    marginTop: "3vh",
    [theme.breakpoints.between("xs", "sm")]: {
      marginBottom: "20vh",
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: "10vh",
    },

    textDecoration: "none",
    backgroundColor: "#e63946",
  },
}));

const MoreInfoPage = () => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const [newComment, setNewComment] = React.useState("");
  const [budgetState, setBudgetState] = React.useState("");
  const [configState, setConfigState] = React.useState("");
  const [locationState, setLocationState] = React.useState([]);
  const [assignedState, setAssignedState] = React.useState("");
  const [statusState, setStatusState] = React.useState("");
  const [subStatusState, setSubStatusState] = React.useState("");
  const [subStatusComment, setSubStatusComment] = React.useState("");
  const [statusComment, setStatusComment] = React.useState("");
  const [assignedComment, setAssignedComment] = React.useState("");

  let inStatus = location.state.enquiry.status;
  let inAssigned = location.state.enquiry.assignedTo;
  let inSubStatus = location.state.enquiry.subStatus;

  React.useEffect(() => {
    setBudgetState(location.state.enquiry.budget);
    setConfigState(location.state.enquiry.config);
    setLocationState(location.state.enquiry.location);
    setAssignedState(location.state.enquiry.assignedTo);
    setStatusState(location.state.enquiry.status);
    setSubStatusState(location.state.enquiry.subStatus);
  }, [location]);

  const changeComment = (e) => {
    setNewComment(e.target.value);
  };

  const changeBudget = (e) => {
    setBudgetState(e.target.value);
  };

  const changeConfig = (e) => {
    setConfigState(e.target.value);
  };

  const changeLocation = (e) => {
    const {
      target: { value },
    } = e;
    console.log(value);
    setLocationState(value);
  };

  const changeAssigned = (e) => {
    setAssignedState(e.target.value);
    setAssignedComment(`Assigned [ ${inAssigned} -> ${e.target.value} ]`);
    setNewComment(
      `${statusComment} ${subStatusComment} Assigned [ ${inAssigned} -> ${e.target.value} ]`
    );
  };

  const changeStatus = (e) => {
    setStatusState(e.target.value);
    setStatusComment(`Status [ ${inStatus} -> ${e.target.value} ]`);
    setNewComment(
      `Status [ ${inStatus} -> ${e.target.value} ] ${subStatusComment} ${assignedComment}`
    );
  };

  const changeSubStatus = (e) => {
    setSubStatusState(e.target.value);
    setSubStatusComment(`SubStatus [ ${inSubStatus} -> ${e.target.value} ]`);
    setNewComment(
      `${statusComment} SubStatus [ ${inSubStatus} -> ${e.target.value} ] ${assignedComment}`
    );
  };

  const submitComment = (e) => {
    console.log(newComment);
    const commentBody = {
      comment: newComment,
      updated: Date.now(),
      budget: budgetState,
      config: configState,
      location: locationState,
      status: statusState,
      subStatus: subStatusState,
      assignedTo: assignedState,
      id: location.state.enquiry._id,
    };
    console.log(commentBody);
    console.log("sdfsdfsad", budgetState, configState);
    api.addComment(commentBody).then(() => {
      if (newComment.length) {
        history.replace({
          ...history.location,
          state: {
            enquiry: {
              ...location.state.enquiry,
              comment: [...location.state.enquiry.comment, commentBody],
              budget: budgetState,
              config: configState,
              location: locationState,
              status: statusState,
              subStatus: subStatusState,
              assignedTo: assignedState,
            },
          },
        });
        setNewComment("");
      }
    });
  };

  const disableSaveButton =
    statusState === location.state.enquiry.status
      ? locationState === location.state.enquiry.location &&
        budgetState === location.state.enquiry.budget &&
        configState === location.state.enquiry.config
      : !newComment.length;

  return (
    <div className={classes.root}>
      <div className={classes.enquiry}>
        <Typography
          variant="h7"
          style={{ fontWeight: "bolder", marginBottom: "2vh" }}
        >
          DETAILS
        </Typography>
        <TextField
          label="Name"
          variant="outlined"
          disabled
          value={location.state.enquiry.name}
          className={classes.field}
        />
        <TextField
          label="Phone"
          variant="outlined"
          disabled
          value={location.state.enquiry.phoneNumber}
          className={classes.field}
        />
        <TextField
          label="Source"
          variant="outlined"
          disabled
          value={location.state.enquiry.source}
          className={classes.field}
        />
        <FormControl
          variant="filled"
          sx={{ minWidth: 140 }}
          className={classes.field}
        >
          <InputLabel>Assigned</InputLabel>
          <Select value={assignedState} onChange={changeAssigned}>
            <MenuItem value={"Aditya"}>&nbsp; Aditya</MenuItem>
            <MenuItem value={"Sampat"}>&nbsp; Sampat</MenuItem>
            <MenuItem value={"Thomson"}>&nbsp; Thomson</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          variant="filled"
          sx={{ minWidth: 140 }}
          className={classes.field}
        >
          <InputLabel>Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={statusState}
            onChange={changeStatus}
          >
            <MenuItem value={"Enquired"}>&nbsp; Enquired</MenuItem>
            <MenuItem value={"Connected"}>&nbsp; Connected</MenuItem>
            <MenuItem value={"Qualified"}>&nbsp; Qualified</MenuItem>
            <MenuItem value={"Viewing"}>&nbsp; Viewing</MenuItem>
            <MenuItem value={"Closed"}>&nbsp; Closed</MenuItem>
            <MenuItem value={"Dropped"}>&nbsp; Dropped</MenuItem>
          </Select>
        </FormControl>
        {statusState === "Connected" && (
          <FormControl
            variant="filled"
            sx={{ minWidth: 140 }}
            className={classes.field}
          >
            <InputLabel>SubStatus</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={subStatusState}
              onChange={changeSubStatus}
            >
              <MenuItem value={"Collecting Info"}>
                &nbsp; Collecting Info
              </MenuItem>
              <MenuItem value={"Collected Info"}>
                &nbsp; Collected Info
              </MenuItem>
            </Select>
          </FormControl>
        )}
        {statusState === "Viewing" && (
          <FormControl
            variant="filled"
            sx={{ minWidth: 140 }}
            className={classes.field}
          >
            <InputLabel>SubStatus</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={subStatusState}
              onChange={changeSubStatus}
            >
              <MenuItem value={"Payment Pending"}>
                &nbsp; Payment Pending
              </MenuItem>
              <MenuItem value={"Payment Done"}>&nbsp; Payment Done</MenuItem>
              <MenuItem value={"Tour Scheduled"}>
                &nbsp; Tour Scheduled
              </MenuItem>
              <MenuItem value={"Tour Done"}>&nbsp; Tour Done</MenuItem>
            </Select>
          </FormControl>
        )}
        {(statusState === "Closed" || statusState === "Dropped") && (
          <FormControl
            variant="filled"
            sx={{ minWidth: 140 }}
            className={classes.field}
          >
            <InputLabel>SubStatus</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={subStatusState}
              onChange={changeSubStatus}
            >
              <MenuItem value={"Collecting Info"}>
                &nbsp; Collecting Feedback
              </MenuItem>
              <MenuItem value={"Collected Info"}>
                &nbsp; Collected Feedback
              </MenuItem>
            </Select>
          </FormControl>
        )}

        <TextField
          label="Created At"
          variant="outlined"
          disabled
          value={
            new Date(location.state.enquiry.createdAt).toString().slice(4, 16) +
            " (" +
            new Date(location.state.enquiry.createdAt)
              .toString()
              .slice(16, 21) +
            ")"
          }
          className={classes.field}
        />
        <PreferencesComponent
          budget={budgetState}
          configuration={configState}
          location={locationState}
          changeBudget={changeBudget}
          changeConfig={changeConfig}
          changeLocation={changeLocation}
        />
        <Typography
          variant="h7"
          style={{
            fontWeight: "bolder",
            marginBottom: "1vh",
            marginTop: "4vh",
          }}
        >
          COMMENTS
        </Typography>
        {location.state.enquiry.comment
          .slice(0)
          .reverse()
          .map((comment, i) => {
            return (
              <div className={classes.comments}>
                <Typography className={classes.commentsField}>
                  {new Date(comment.updated).toString().slice(4, 16) +
                    " (" +
                    new Date(comment.updated).toString().slice(16, 21) +
                    ")"}
                  : &nbsp;
                </Typography>
                <Typography className={classes.commentList}>
                  {comment.comment}
                </Typography>
              </div>
            );
          })}
        <Typography
          variant="h7"
          style={{
            fontWeight: "bolder",
            marginBottom: "1vh",
            marginTop: "4vh",
          }}
        >
          NEW COMMENT
        </Typography>
        <TextField
          label="Comment"
          variant="filled"
          value={newComment}
          multiline
          rows={4}
          className={classes.field}
          onChange={changeComment}
        />
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
          onClick={submitComment}
          disabled={disableSaveButton}
        >
          SAVE
        </Button>
      </div>
    </div>
  );
};

export default MoreInfoPage;
