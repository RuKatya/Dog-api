import axios from 'axios';

export const getData = async () => {
    try {
        const { data } = await axios.get(`https://dog.ceo/api/breeds/list/all`)

        const { message } = data;
        const breeds = Object.keys(message);

        return breeds
    } catch (error) {
        console.error(error);
        return [];
    }
}