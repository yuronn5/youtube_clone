import axios from "axios";

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';


  const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': "c117f5b193mshc0f93ee6a18d6b7p17b8d0jsndb60bde7329d",
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
  };

  export const fetchFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  };