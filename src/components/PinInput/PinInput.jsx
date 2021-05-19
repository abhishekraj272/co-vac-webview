import { Fab, TextField } from '@material-ui/core';
import React, { useRef } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from 'react-redux';
import { updatePIN } from '../../redux/action';

import './PinInput.scss';

export default function PinInput() {
    const pinInputEl = useRef(null);
    const dispatch = useDispatch();

    const submit = () => {
        const pin = pinInputEl.current;
        if (!pin) {
            return;
        }
        dispatch(updatePIN(pin));
    }


    return (
        <div className="pinInput">
            <TextField
                fullWidth={true}
                autoFocus={true}
                id="outlined-basic"
                label="Enter PIN Code"
                variant="outlined"
                type="number"
                onChange={e => pinInputEl.current = e.target.value}
            />
            <Fab
                variant="extended"
                size="large"
                color="primary"
                aria-label="search"
                disabled={false}
                onClick={submit}
            >
                <SearchIcon />
                Search
            </Fab>
        </div>
    )
}
