import axios from "axios";

export const getSubListBreed = async (breed: string | undefined) => {
    try {
        const { data } = await axios.get(
            `https://dog.ceo/api/breed/${breed}/list`
        );

        const { message } = data;

        return message;
    } catch (error) {
        console.error(error);
        return [];
    }
};