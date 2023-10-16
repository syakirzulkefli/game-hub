import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '57c4cd25f43b415280ae449d89d5c96c'
    }
})