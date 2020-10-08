import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakerapi.it/api/v1/persons?_quantity=3',
});

export default api;