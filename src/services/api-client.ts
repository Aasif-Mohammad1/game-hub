import axios from 'axios';

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'a94f4c8acccb421a8937ee5f1da4f4ae'
    }
})