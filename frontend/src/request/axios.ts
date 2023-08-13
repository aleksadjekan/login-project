import axios from 'axios'

const baseURL = 'http://localhost:8081/'

export const get = async (path: string) => {
    return await axios.get(
        baseURL + path
    ).then((response) => {
        return response.data;
    }).catch((error) => {
        console.error('ERROR', error);
    })

}