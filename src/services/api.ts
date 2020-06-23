import axios from 'axios';

const api = axios.create({
  baseURL: 'https://covid-api-0rientd.herokuapp.com/'
});

export default api;
