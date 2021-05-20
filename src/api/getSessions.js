import axios from 'axios';
import { COWIN_BASE_URL } from '../constants';
import { addCenters, toggleError } from '../redux/action';

function getTodaysDate() {
    const date = new Date();

    const m = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
    const d = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;

    return `${d}-${m}-${date.getFullYear()}`
}

export default function getSessions(pincode, cityID) {

    return async (dispatch) => {
        let url;
        if (pincode) {
            url = new URL(COWIN_BASE_URL + 'appointment/sessions/public/calendarByPin');
            url.searchParams.append('pincode', pincode);
        } else {
            url = new URL(COWIN_BASE_URL + 'appointment/sessions/public/calendarByDistrict');
            url.searchParams.append('district_id', cityID);
        }

        url.searchParams.append('date', getTodaysDate());

        try {
            const resp = await axios.get(url);
            if (resp.status === 200 && resp.data.centers.length > 0) {
                dispatch(addCenters(resp.data.centers));
                return;
            }
        } catch (error) {
            dispatch(toggleError());
            return;
        }
        dispatch(toggleError());
    }

}