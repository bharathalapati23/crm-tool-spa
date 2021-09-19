import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '30px',
        display: 'flex',
        flexDirection: 'column'
    },
}));

const PreferencesComponent = ({ budget, config, location, changeBudget, changeConfig, changeLocation }) => {
    const classes = useStyles()




    return (
        <div className={classes.root}>
            <div style={{ fontWeight: 'bolder' }}>
                PREFERENCES
            </div>
            <div>
                Budget :
                <TextField value={budget} onChange={changeBudget} />
            </div>

            <div>
                Configuration
                <TextField value={config} onChange={changeConfig} />
            </div>

            <div>
                Location
                <TextField value={location} onChange={changeLocation} />
            </div>

        </div>
    )
}

export default PreferencesComponent
