import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const axiosClient = axios.create({
  baseURL: 'https://api.rawg.io',
});

axiosClient.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
      key: apiKey,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosClient;
