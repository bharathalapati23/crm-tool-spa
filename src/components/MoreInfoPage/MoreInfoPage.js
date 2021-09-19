import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useLocation, useHistory } from "react-router-dom";
import { TextField, Select, MenuItem } from '@material-ui/core'
import * as api from '../../api'
import PreferencesComponent from './PreferencesComponent'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginTop: '80px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '50px',
        },
        width: '100%',
        maxWidth: '1300px',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: 'auto',
    },
}));

const MoreInfoPage = () => {
    const classes = useStyles()
    const location = useLocation();
    const history = useHistory()

    const [newComment, setNewComment] = React.useState('')

    const changeComment = (e) => {
        setNewComment(e.target.value)
    }

    const [budgetState, setBudgetState] = React.useState('')
    const [configState, setConfigState] = React.useState('')
    const [locationState, setLocationState] = React.useState('')
    const [statusState, setStatusState] = React.useState('')

    React.useEffect(() => {
        setBudgetState(location.state.enquiry.budget)
        setConfigState(location.state.enquiry.config)
        setLocationState(location.state.enquiry.location)
        setStatusState(location.state.enquiry.status)
    }, [location])

    const changeBudget = (e) => {
        setBudgetState(e.target.value)
    }

    const changeConfig = (e) => {
        setConfigState(e.target.value)
    }

    const changeLocation = (e) => {
        setLocationState(e.target.value)
    }

    const changeStatus = (e) => {
        setStatusState(e.target.value)
    }

    const submitComment = (e) => {
        const commentBody = {
            comment: newComment,
            updated: Date.now(),
            budget: budgetState,
            config: configState,
            location: locationState,
            status: statusState,
            id: location.state.enquiry._id
        }
        console.log(commentBody)
        console.log('sdfsdfsad', budgetState, configState)
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
                            status: statusState
                        }
                    }
                })
                setNewComment('')
            }
        })
    }

    const disableSaveButton = statusState === location.state.enquiry.status
        ? locationState === location.state.enquiry.location &&
        budgetState === location.state.enquiry.budget &&
        configState === location.state.enquiry.config
        : !newComment.length


        // newComment.length && (statusState === location.state.enquiry.status &&
        // locationState === location.state.enquiry.location &&
        // budgetState === location.state.enquiry.budget &&
        // configState === location.state.enquiry.config)


    return (
        <div className={classes.root}>
            {/* {JSON.stringify(location.state)} */}
            <div>
                Name: {location.state.enquiry.name}
            </div>
            <div>
                Phone Number: {location.state.enquiry.phoneNumber}
            </div>
            <div>
                Source: {location.state.enquiry.source}
            </div>
            <div>
                Status:
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={statusState}
                    onChange={changeStatus}
                >
                    <MenuItem value={'Enquired'}>Enquired</MenuItem>
                    <MenuItem value={'Connected'}>Connected</MenuItem>
                    <MenuItem value={'Qualified'}>Qualified</MenuItem>
                    <MenuItem value={'In Progress'}>In Progress</MenuItem>
                    <MenuItem value={'Closed'}>Closed</MenuItem>
                    <MenuItem value={'Lost'}>Lost</MenuItem>
                </Select>
            </div>
            <div>
                Created: {location.state.enquiry.createdAt}
            </div>
            <PreferencesComponent
                budget={budgetState}
                config={configState}
                location={locationState}
                changeBudget={changeBudget}
                changeConfig={changeConfig}
                changeLocation={changeLocation}
            />
            <div style={{ marginTop: '30px', fontWeight: 'bolder' }}>
                COMMENTS
            </div>
            {location.state.enquiry.comment.map((comment) => {
                return (
                    <div style={{ marginTop: '10px' }}>
                        <div>
                            {comment.updated}
                        </div>
                        <div>
                            {comment.comment}
                        </div>
                    </div>
                )
            })}
            <div style={{ marginTop: '30px', fontWeight: 'bolder' }}>
                NEW COMMENT
            </div>
            <TextField value={newComment} onChange={changeComment} />
            <button style={{ width: '100px', marginTop: '10px' }} onClick={submitComment} disabled={disableSaveButton}>SAVE</button>
        </div>
    )
}

export default MoreInfoPage
