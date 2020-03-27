import axios from 'axios';

const AxiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'http://localhost:3300',
        headers: {
            Authorization: token
        }
    })
}

export default AxiosWithAuth;