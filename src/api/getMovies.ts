import { API_TOKEN } from "@/config";
import axios from "axios";

export const getMovies = async <T>(
  urlParamsObject = {},
): Promise<T>  => {
  try {
    const queryString = JSON.stringify(urlParamsObject);

    const moviesGetOptions = {
      method: 'GET',
      url: `https://api.kinopoisk.dev/v1.4/movie${queryString ? `?${queryString}` : ""}`,
      headers: {
        'X-API-KEY': API_TOKEN,
      },
    };

    const response = await axios.request(moviesGetOptions);
    return response.data.docs;

  } catch (error) {
    console.error(error);
    throw new Error(`Please check if your server is running and you set all the required tokens.`);
  }
}
