import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useHistory } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import Filters from "./Filters/Filters";
import SearchIcon from "@mui/icons-material/Search";
import Loading from "../../Loading";

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
      height: "80vh",
      marginBottom: "15vh",
    },
  },
  filtersRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.between("xs", "md")]: {
      flexDirection: "column",
    },
  },
  search: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "15px",
  },
  columnHead: {
    fontSize: "18px",
    backgroundColor: "#495057",
    color: "#ffffff",
    fontWeight: "bold",
  },
}));

const EnquiryTable = ({ enquiries }) => {
  const classes = useStyles();
  const history = useHistory();
  const [assigned, setAssigned] = useState("");
  const [status, setStatus] = useState("");
  const [filteredEnquiries, setFilteredEnquiries] = useState(enquiries);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const sortedEnquiries = enquiries
      .slice()
      .sort(
        (a, b) =>
          new Date(b.comment[b.comment.length - 1].updated) -
          new Date(a.comment[a.comment.length - 1].updated)
      );
    setFilteredEnquiries(sortedEnquiries);
  }, [enquiries]);

  const handleSearch = () => {
    const data = enquiries.filter((enquiry) => {
      return enquiry.name.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredEnquiries(data);
  };

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
      <div className={classes.filtersRow}>
        <div className={classes.search}>
          <IconButton onClick={search.length && handleSearch}>
            <SearchIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <TextField
            label=" Search"
            variant="filled"
            value={search}
            className={classes.field}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter" && search.length) {
                handleSearch();
              }
            }}
          />
        </div>
        <Filters
          assigned={assigned}
          handleAssignedChange={handleAssignedChange}
          status={status}
          handleStatusChange={handleStatusChange}
        />
      </div>
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
              <TableCell className={classes.columnHead} align="center">
                Source
              </TableCell>
              <TableCell className={classes.columnHead} align="center">
                Last Updated
              </TableCell>
            </TableRow>
          </TableHead>
          {enquiries.length === 0 && <Loading />}
          {enquiries.length !== 0 && (
            <TableBody>
              {status === "" && assigned === ""
                ? filteredEnquiries.map((row, index) => (
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
                : filteredEnquiries
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
                            new Date(
                              row.comment[row.comment.length - 1].updated
                            )
                              .toString()
                              .slice(16, 21) +
                            ")"}
                        </TableCell>
                      </TableRow>
                    ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </div>
  );
};

export default EnquiryTable;
