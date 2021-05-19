import axios from 'axios';
import { COWIN_BASE_URL } from '../constants';
import { addCity } from '../redux/action';

export default function getCities(stateId) {

    return async (dispatch) => {
        const url = COWIN_BASE_URL + 'admin/location/districts/' + stateId;

        const resp = await axios.get(url);

        if (resp.status === 200) {
            dispatch(addCity(resp.data.districts));
        }
    }

}