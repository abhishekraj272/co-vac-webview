import { Fab, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import getCities from '../../api/getCity';
import getStates from '../../api/getStates';
import SearchIcon from '@material-ui/icons/Search';


import './CityInput.scss';

export default function CityInput() {
    const dispatch = useDispatch();
    const location = useSelector(state => state.location);

    useEffect(() => {
        dispatch(getStates());
    }, [dispatch]);

    const onStateSelect = (e) => {
        if (e.target.value) {
            dispatch(getCities(e.target.value));
        }
    }

    return (
        <div className="cityInput">
            <div className="cityInput__select">
                <FormControl style={{ minWidth: 150 }} variant="outlined">
                    <InputLabel id="state-select-label">State</InputLabel>
                    <Select
                        labelId="state-select-label"
                        id="state-select"
                        onChange={onStateSelect}
                        label="State"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>

                        {
                            location.states.map(state => (
                                <MenuItem key={state.state_id} value={`${state.state_id}`}>{state.state_name}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>

                <FormControl style={{ minWidth: 150 }} variant="outlined">
                    <InputLabel id="city-select">City</InputLabel>
                    <Select
                        labelId="city-select-label"
                        id="city-select"
                        // value={age}
                        // onChange={handleChange}
                        label="City"
                        autoWidth={true}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>

                        {
                            location.cities.map(city => (
                                <MenuItem key={city.district_id} value={`${city.district_id}`}>{city.district_name}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </div>

            <center>
                <Fab
                    variant="extended"
                    size="large"
                    color="primary"
                    aria-label="search"
                    disabled={false}
                // onClick={submit}
                >
                    <SearchIcon />
                    Search
                </Fab>
            </center>

        </div>
    )
}
