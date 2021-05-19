import { Paper, Tab, Tabs } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTab } from '../../redux/action';
import './Navbar.scss';

function a11yProps(index) {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    };
}



export default function Navbar() {
    const currentTab = useSelector(state => state.currentTab);

    const dispatch = useDispatch();

    const handleChange = (_, newValue) => {
        dispatch(changeTab(newValue));
    };
    return (
        <Paper square>
            <Tabs
                value={currentTab}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="tabs"
                variant="fullWidth"
            >
                <Tab label="Search By PIN" {...a11yProps(0)} />
                <Tab label="Search By District" {...a11yProps(1)} />
            </Tabs>
        </Paper>
    )
}
