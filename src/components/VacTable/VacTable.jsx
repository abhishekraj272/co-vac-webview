import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import { months } from '../../constants';
import { Chip } from '@material-ui/core';

import './VacTable.scss';

const useStyles = makeStyles({
    table: {
        width: '100%',
        height: '400px'
    },
});

function dateFormatter(addDate = 0) {
    const d = new Date();
    const year = d.getFullYear();
    const date = d.getDate() + addDate;
    const monthIndex = d.getMonth();
    const monthName = months[monthIndex];
    return `${date} ${monthName} ${year}`;
}

const get7Dates = () => {
    const arr = []
    for (let index = 0; index < 7; index++) {
        arr.push(dateFormatter(index));
    }
    return arr;
}

export default function VacTable() {
    const classes = useStyles();

    const centers = useSelector(state => state.centers);
    const dates = get7Dates();

    return (
        <TableContainer component={Paper} style={{ maxHeight: '70vh' }}>
            <Table stickyHeader className={classes.table} aria-label="table">
                <TableHead>
                    <TableRow>
                        <TableCell variant='head'>Center Name</TableCell>
                        {
                            dates.map((date, index) => (
                                <TableCell key={index} align="right">{date}</TableCell>
                            ))
                        }

                    </TableRow>
                </TableHead>
                <TableBody>
                    {centers.map((center) => (
                        <TableRow key={center.center_id}>
                            <TableCell component="th" scope="row" align="center">
                                {center.name},<br />
                                {center.district_name},<br />
                                {center.pincode}
                            </TableCell>
                            {
                                [...Array(7)].map((_, i) => (
                                    <TableCell key={i} align="center">
                                        { center.sessions[i] ?
                                            (center.sessions[i]?.available_capacity > 0 ?
                                                <Chip color="primary" component="a" href="https://selfregistration.cowin.gov.in/" clickable label={center.sessions[i]?.available_capacity} />
                                                : <Chip size='small' label="Booked" color="secondary" />
                                            )
                                            : "-"}
                                        < br />
                                        {
                                            center.sessions[i] ? <Chip size='small' style={{ margin: '3% 0 3% 0' }} label={center.sessions[i]?.vaccine} color="primary" variant="outlined"
                                            /> : ""
                                        }
                                        {
                                            center.sessions[i] ? `Age ${center.sessions[i]?.min_age_limit}+ ` : ""
                                        }
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
