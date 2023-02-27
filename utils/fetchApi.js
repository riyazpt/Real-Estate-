
import axios from "axios";
export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'f0e71e56cemsh1602f2ca1300efap111738jsnb73064b2d822',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });
return data;
}