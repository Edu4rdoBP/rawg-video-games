import axios from 'axios';

const apiKey = process.env.API_KEY;

const axiosClient = axios.create({
  baseURL: 'https://api.rawg.io',
});

axiosClient.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
      key: 'd38447171586476cac7323c4235167d4',
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosClient;
