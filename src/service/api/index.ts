import axios from "axios";
import type { AxiosInstance } from "axios";
import type { SYDRequestConfig } from "./types";

class SYDRequest {
  instance: AxiosInstance;
  // interceptors: SYDRequestInterceptors;

  constructor(config: SYDRequestConfig) {
    this.instance = axios.create(config);

    // 从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestInterceptor,
      config.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      config.interceptors?.responceInterceptor,
      config.interceptors?.responceInterceptorCatch
    );

    // 添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (err) => {
        return err;
      }
    );

    this.instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        return err;
      }
    );
  }

  request<T>(config: SYDRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }

      this.instance
        .request<number, T>(config)
        .then((res) => {
          if (config.interceptors?.responceInterceptor) {
            res = config.interceptors.responceInterceptor(res);
          }
          // console.log(res);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export default SYDRequest;
