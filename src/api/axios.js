import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "f46911462a7f017b6896b1582ac230bd",
        language: "ko-KR",
    },
});

export default instance;