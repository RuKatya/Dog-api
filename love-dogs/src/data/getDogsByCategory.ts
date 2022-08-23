import axios from "axios";

export const getDogsByCategory = async (breed: string | undefined) => {
  try {
    const { data } = await axios.get(
      `https://dog.ceo/api/breed/${breed}/images`
    );

    const { message } = data;

    return message;
  } catch (error) {
    console.error(error);
    return [];
  }
};