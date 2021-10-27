import axios from 'axios';

const HTTPClient = axios.create({
  baseURL: 'https://prod-quotation.herokuapp.com/api',
});

export default HTTPClient;
