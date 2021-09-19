import axios, {AxiosRequestConfig} from 'axios';

function Api() {
  return {
    get: function get<T>(config: AxiosRequestConfig = {}) {
      return axios.request<T>(config);
    },
    post: function post<T>(config: AxiosRequestConfig = {}) {
      return axios.request<T>(config);
    },
  };
}

export {
  Api
}
