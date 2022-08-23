import axios from "axios";

export const getSubDogsBreed = async (breed: string | undefined, subBreed: string | undefined) => {
    try {
        const { data } = await axios.get(
            `https://dog.ceo/api/breed/${breed}/${subBreed}/images`
        );

        const { message } = data;

        return message;
    } catch (error) {
        console.error(error);
        return [];
    }
};