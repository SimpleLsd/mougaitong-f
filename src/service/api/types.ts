import type { AxiosRequestConfig, AxiosResponse } from "axios";

export interface SYDRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (err: AxiosRequestConfig) => AxiosRequestConfig;
  responceInterceptor?: (res: T) => T;
  responceInterceptorCatch?: (err: T) => T;
}

export interface SYDRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: SYDRequestInterceptors<T>;
}
