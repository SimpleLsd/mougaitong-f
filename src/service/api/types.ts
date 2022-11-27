import type { AxiosRequestConfig, AxiosResponse } from "axios"

export interface SYDRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responceInterceptor?: (res: T) => T
  responceInterceptorCatch?: (err: any) => any
}

export interface SYDRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: SYDRequestInterceptors<T>
}
