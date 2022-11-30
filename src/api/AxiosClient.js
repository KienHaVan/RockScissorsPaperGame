import axios from 'axios';
import queryString from 'query-string';
const AxiosClient = axios.create({
  baseURL: 'https://637aef7f702b9830b9f5bbd3.mockapi.io/api',
  responseType: 'json',
  timeout: 50000,
  paramsSerializer: params => queryString.stringify(params),
});

AxiosClient.interceptors.request.use(
  async config => {
    const newConfig = config;
    // newConfig.headers.common['App-Version'] = APP_CONFIG.version;
    // newConfig.headers.Authorization = 'Bearer ' + getToken();
    return newConfig;
  },
  error => {
    console.log(error.response.data);
    return Promise.reject(error);
  },
);

export default AxiosClient;
