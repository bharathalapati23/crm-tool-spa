import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useHistory } from 'react-router-dom'


const useStyles = makeStyles({
    table: {
        maxWidth: 1300,
    },
    tableContainer: {
        marginTop: '30px'
    }
});

const EnquiryTable = ({ enquiries }) => {
    const classes = useStyles();
    const history = useHistory();

    const navigateToMoreInfo = (e, row) => {
        e.preventDefault()
        e.stopPropagation()
        history.push({
            pathname: '/more-info',
            search: `?search-id=${row._id}`,
            state: { enquiry: row }
        })
    }

    return (
        <div>
            <TableContainer component={Paper} className={classes.tableContainer}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Phone Number</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">First Contact</TableCell>
                            <TableCell align="right">Last Updated</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {enquiries.map((row, index) => (
                            <TableRow key={row.name + index}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.phoneNumber}</TableCell>
                                <TableCell align="right">{row.status}</TableCell>
                                <TableCell align="right">{row.createdAt}</TableCell>
                                <TableCell align="right">{row.createdAt}</TableCell>
                                <TableCell align="right"><ArrowForwardIosIcon onClick={(e) => navigateToMoreInfo(e, row)}/></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default EnquiryTable
