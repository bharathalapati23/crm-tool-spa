import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useHistory } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import Filters from "./Filters/Filters";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  table: {
    maxWidth: 1300,
  },
  tableContainer: {
    marginTop: "30px",
    height: "60vh",
    display: "flex",
    [theme.breakpoints.between("xs", "md")]: {
      width: "90vw",
    },
  },
}));

const EnquiryTable = ({ enquiries }) => {
  const classes = useStyles();
  const history = useHistory();
  const [assigned, setAssigned] = useState("");
  const [status, setStatus] = useState("");

  const handleStatusChange = (event) => {
    setStatus(event);
  };

  const handleAssignedChange = (event) => {
    setAssigned(event);
  };
  const navigateToMoreInfo = (e, row) => {
    e.preventDefault();
    e.stopPropagation();
    history.push({
      pathname: "/more-info",
      search: `?search-id=${row._id}`,
      state: { enquiry: row },
    });
  };

  return (
    <div className={classes.root}>
      <Filters
        assigned={assigned}
        handleAssignedChange={handleAssignedChange}
        status={status}
        handleStatusChange={handleStatusChange}
      />
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  fontSize: "18px",
                  backgroundColor: "#495057",
                  color: "#ffffff",
                  fontWeight: "bold",
                }}
              />
              <TableCell
                style={{
                  fontSize: "18px",
                  backgroundColor: "#495057",
                  color: "#ffffff",
                  fontWeight: "bold",
                }}
                align="center"
              >
                Name
              </TableCell>
              <TableCell
                style={{
                  fontSize: "18px",
                  backgroundColor: "#495057",
                  color: "#ffffff",
                  fontWeight: "bold",
                }}
                align="center"
              >
                Assigned To
              </TableCell>
              <TableCell
                style={{
                  fontSize: "18px",
                  backgroundColor: "#495057",
                  color: "#ffffff",
                  fontWeight: "bold",
                }}
                align="center"
              >
                Status
              </TableCell>
              <TableCell
                style={{
                  fontSize: "18px",
                  backgroundColor: "#495057",
                  color: "#ffffff",
                  fontWeight: "bold",
                }}
                align="center"
              >
                Source
              </TableCell>
              <TableCell
                style={{
                  fontSize: "18px",
                  backgroundColor: "#495057",
                  color: "#ffffff",
                  fontWeight: "bold",
                }}
                align="center"
              >
                Last Updated
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {status === "" && assigned === ""
              ? enquiries.map((row, index) => (
                  <TableRow
                    key={row.name + index}
                    onClick={(e) => navigateToMoreInfo(e, row)}
                  >
                    <TableCell align="center">
                      <IconButton>
                        <ArrowBackIosIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell
                      style={{
                        fontSize: "15px",
                      }}
                      align="center"
                      component="th"
                      scope="row"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell
                      style={{
                        fontSize: "15px",
                      }}
                      align="center"
                    >
                      {row.assignedTo}
                    </TableCell>
                    <TableCell
                      style={{
                        fontSize: "15px",
                      }}
                      align="center"
                    >
                      {row.status}
                    </TableCell>
                    <TableCell
                      style={{
                        fontSize: "15px",
                      }}
                      align="center"
                    >
                      {row.source}
                    </TableCell>
                    <TableCell
                      style={{
                        fontSize: "15px",
                      }}
                      align="center"
                    >
                      {new Date(row.comment[row.comment.length - 1].updated)
                        .toString()
                        .slice(4, 16) +
                        " (" +
                        new Date(row.comment[row.comment.length - 1].updated)
                          .toString()
                          .slice(16, 21) +
                        ")"}
                    </TableCell>
                  </TableRow>
                ))
              : enquiries
                  .filter(
                    (row) =>
                      row.status === status || row.assignedTo === assigned
                  )
                  .map((row, index) => (
                    <TableRow
                      key={row.name + index}
                      onClick={(e) => navigateToMoreInfo(e, row)}
                    >
                      <TableCell align="center">
                        <IconButton>
                          <ArrowBackIosIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell
                        style={{
                          fontSize: "15px",
                        }}
                        align="center"
                        component="th"
                        scope="row"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell
                        style={{
                          fontSize: "15px",
                        }}
                        align="center"
                      >
                        {row.status}
                      </TableCell>
                      <TableCell
                        style={{
                          fontSize: "15px",
                        }}
                        align="center"
                      >
                        {row.source}
                      </TableCell>
                      <TableCell
                        style={{
                          fontSize: "15px",
                        }}
                        align="center"
                      >
                        {new Date(row.comment[row.comment.length - 1].updated)
                          .toString()
                          .slice(4, 16) +
                          " (" +
                          new Date(row.comment[row.comment.length - 1].updated)
                            .toString()
                            .slice(16, 21) +
                          ")"}
                      </TableCell>
                    </TableRow>
                  ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default EnquiryTable;
