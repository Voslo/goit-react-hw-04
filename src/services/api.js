import axios from "axios";

export async function getData({newQuery, page}) {
    return axios.get("https://api.unsplash.com/search/photos", {
        params: {
            client_id: "u2w6oniCmyO05TJAcholZgmw5OYIXNNjoAVyg7DrohE",
            query: newQuery,
            page,
            per_page: 12
        }
    });
}