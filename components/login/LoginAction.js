import Axios from "axios"

export const doLogin = (loginId, password) => {
    return Axios.post('http://10.35.6.213:8882/login')
}