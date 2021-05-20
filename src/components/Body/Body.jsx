import { Container } from '@material-ui/core';
import React from 'react';
import Error from '../Error/Error';
import Footer from '../Footer/Footer';
// import CityInput from '../CityInput/CityInput';
// import PinInput from '../PinInput/PinInput';
// import TabPanel from '../Tabpanel/Tabpanel';
import VacTable from '../VacTable/VacTable';
import {
    Switch,
    Route,
} from "react-router-dom";

import './Body.scss';

export default function Body() {

    return (
        <div className="body">
            <Container maxWidth="md">
                {/* <TabPanel value={currentTab} index={0}>
                    <PinInput />
                </TabPanel>
                <TabPanel value={currentTab} index={1}>
                    <CityInput />
                </TabPanel> */}
                <Switch>
                    <Route path="/vaccines/:country/city/:cityId">
                        <VacTable />
                    </Route>

                    <Route path="/">
                        <Error type={1} />
                    </Route>
                </Switch>
                <Footer />
            </Container>
        </div>
    )
}
