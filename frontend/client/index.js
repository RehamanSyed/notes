import Axios from "axios";

Axios.defaults.baseURL = "https://localhost:5000/api";

export const Fetcher = Axios.create();
