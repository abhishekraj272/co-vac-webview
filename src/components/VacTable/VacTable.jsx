import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import getSessions from '../../api/getSessions';
import { useDispatch, useSelector } from 'react-redux';
import { Chip, CircularProgress } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { get7Dates } from '../../utils/dateFormatter';


import './VacTable.scss';
import Error from '../Error/Error';

const useStyles = makeStyles({
    table: {
        width: '100%',
        height: '400px'
    },
});

export default function VacTable() {
    const classes = useStyles();

    const dispatch = useDispatch();

    const { country, cityId } = useParams();


    useEffect(() => {

        if (cityId > 10000) {
            dispatch(getSessions(cityId, undefined));
        } else {
            dispatch(getSessions(undefined, cityId));
        }

    }, [dispatch, cityId]);

    const state = useSelector(state => state);
    const dates = get7Dates();

    if (country.toLowerCase() !== 'india') {
        return <Error type={2} />
    }

    if (state.error) {
        return <Error />
    }

    if (state.loading) {
        return <center><CircularProgress thickness={3} /></center>
    }

    const centers = state.centers;

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
