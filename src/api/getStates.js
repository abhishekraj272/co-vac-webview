import axios from 'axios';
import { COWIN_BASE_URL } from '../constants';
import { addState } from '../redux/action';

export default function getStates() {

    return async (dispatch) => {
        const url = COWIN_BASE_URL + 'admin/location/states';

        const resp = await axios.get(url);

        if (resp.status === 200) {
            dispatch(addState(resp.data.states));
        }
    }

}