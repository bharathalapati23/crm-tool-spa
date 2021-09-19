import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Typography, Paper, Button } from '@material-ui/core'
import * as api from '../../api'

const initialConfig = {
    name: '',
    phoneNo: '',
    comment: '',
    source: ''
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginTop: '50px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '50px',
        },
        width: '100%',
        maxWidth: '1300px',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: 'auto',
    },
    textFieldStyle: {
        marginTop: '20px'
    },
    buttonSubmit: {
        marginTop: '20px'
    }
}));

const NewEnquiryPage = () => {
    const classes = useStyles()
    const [postData, setPostData] = React.useState(initialConfig);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(postData)
        api.createEnquiry(postData);
    };

    return (
        <Paper className={classes.root}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Create an Enquiry</Typography>
                <TextField className={classes.textFieldStyle} name="name" variant="outlined" label="Name" fullWidth value={postData.name} onChange={(e) => setPostData({ ...postData, name: e.target.value })}/>
                <TextField className={classes.textFieldStyle} type="number" name="phoneNo" variant="outlined" label="Phone Number" fullWidth value={postData.phoneNo} onChange={(e) => setPostData({ ...postData, phoneNo: e.target.value })}/>
                <TextField className={classes.textFieldStyle} name="comment" variant="outlined" label="Comment" fullWidth value={postData.comment} onChange={(e) => setPostData({ ...postData, comment: e.target.value })}/>
                <TextField className={classes.textFieldStyle} name="source" variant="outlined" label="Source" fullWidth value={postData.source} onChange={(e) => setPostData({ ...postData, source: e.target.value })}/>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            </form>
        </Paper>
    )
}

export default NewEnquiryPage
