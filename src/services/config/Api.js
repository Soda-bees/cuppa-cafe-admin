import axios from "axios"

export const baseURL = 'http://192.168.100.111:8080/'

export const signUp = async (body) => {
    try {
        const headers = {
            'Content-Type': 'application/json',
            //  "Authorization": `Bearer ${token}`
        }
        const { data } = await axios.post(`${baseURL}outlet/signUp`, body, { headers })
        return data
    } catch (error) {
        return error
    }
}