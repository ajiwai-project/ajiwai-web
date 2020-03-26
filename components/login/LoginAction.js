import Axios from 'axios'
import { AsyncStorage } from 'react-native';

export const doLogin = (loginId, password) => {
    return Axios.post('http://localhost:8882/login')
        .then(async res => {
            const token = await res.data.access_token;
            AsyncStorage.setItem('access_token', token);
        })
        .catch(_ => {

        })
}
