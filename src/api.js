import axios from "axios";

export default async function getCryptoData(query = null){


    const url = new URL ('https://api.coincap.io/v2/assets');

    if (query){
        url.searchParams.append('search', query);
    }
    url.searchParams.append('limit', 20);

    const res = await axios.get(url)

    return res.data

}
