import Axios from 'axios'
import { AsyncStorage } from 'react-native';

export const doLogin = (loginId, password) => {
    return Axios.post('http://localhost:8882/login')
        .then(res => {
            console.log(res.data.access_token);
            AsyncStorage.setItem('access_token', res.data.access_token)
        })
        .catch(_ => {

        })
}
