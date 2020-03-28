import Axios from 'axios'

export const getRecommends = () => {
    return Axios.get('http://localhost:8882/recommends')
        .then(res => {
            console.log(res.data);
        })
}