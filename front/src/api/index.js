import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_API || 'http://localhost:3001/api',
});

export default api;
