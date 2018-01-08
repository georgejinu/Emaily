import axios from axios;
import { fETCH_USER } from './types';

const fetchUser = () => {
    axios.get('/api/current_user');
};