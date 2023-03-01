import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { REQ_TIMEOUT } from "../constants/global";
import { LocalStorageHelpers } from "../helpers/localStorage";

type ConfigModel = AxiosRequestConfig;

const instance = axios.create({
  timeout: REQ_TIMEOUT,
});

instance.interceptors.request.use(function (config: ConfigModel): any {
  if (!config.url) {
    throw new axios.Cancel("Operation canceled by the user.");
  }

  const token = LocalStorageHelpers.getAccessToken();

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    throw error;
  }
);

interface APIModel {
  get<T = any, R = AxiosResponse<T>>(
    endpointKey: string,
    config?: ConfigModel | null
  ): Promise<R>;

  post<T = any, R = AxiosResponse<T>>(
    endpointKey: string,
    data?: any,
    config?: ConfigModel | null
  ): Promise<R>;

  put<T = any, R = AxiosResponse<T>>(
    endpointKey: string,
    data?: any,
    config?: ConfigModel | null
  ): Promise<R>;

  delete<T = any, R = AxiosResponse<T>>(
    endpointKey: string,
    config?: ConfigModel | null
  ): Promise<R>;

  patch<T = any, R = AxiosResponse<T>>(
    endpointKey: string,
    data?: any,
    config?: ConfigModel | null
  ): Promise<R>;
}

// ** Main API instance for all requests **
export const APIService: APIModel = {
  get(path, config) {
    return instance.get(path, config || undefined);
  },

  post(path, data, config) {
    return instance.post(path, data, config || undefined);
  },

  put(path, data, config) {
    return instance.put(path, data, config || undefined);
  },

  delete(path, config) {
    return instance.delete(path, config || undefined);
  },

  patch(path, data, config) {
    return instance.patch(path, data, config || undefined);
  },
};

export default instance;
