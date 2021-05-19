import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import getSessions from '../../api/getSessions';
import Error from '../Error/Error';
import Footer from '../Footer/Footer';
// import CityInput from '../CityInput/CityInput';
// import PinInput from '../PinInput/PinInput';
// import TabPanel from '../Tabpanel/Tabpanel';
import VacTable from '../VacTable/VacTable';

import './Body.scss';

export default function Body() {
    const dispatch = useDispatch();
    const [error, setError] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(document.location.search.substring(1));
        const pin = params.get("pin");
        const cityId = params.get("cityId");

        if (pin) {
            dispatch(getSessions(pin, undefined));
        } else if (cityId) {
            dispatch(getSessions(undefined, cityId));
        } else {
            setError(true);
        }

    }, [dispatch]);

    return (
        <div className="body">
            <Container maxWidth="md">
                {/* <TabPanel value={currentTab} index={0}>
                    <PinInput />
                </TabPanel>
                <TabPanel value={currentTab} index={1}>
                    <CityInput />
                </TabPanel> */}
                {
                    error ? <Error /> : <VacTable />
                }
                <Footer />
            </Container>
        </div>
    )
}
