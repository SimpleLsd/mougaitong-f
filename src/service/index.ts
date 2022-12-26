/* eslint-disable @typescript-eslint/no-explicit-any */
import SYDRequest from "./api/index";
import { BASE_URL, TIME_OUT } from "./api/config";

const sydRequest = new SYDRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      return config;
    },
    requestInterceptorCatch: (err) => {
      return err;
    },
    responceInterceptor: (config) => {
      return config;
    },
    responceInterceptorCatch: (err) => {
      return err;
    },
  },
});

const getArticles = async () => {
  return sydRequest.request({
    url: `/articles`,
    method: "GET",
    interceptors: {
      responceInterceptor: (res: any) => {
        return res.data;
      },
    },
  });
};

const getArticleById = async (id: string) => {
  return sydRequest.request({
    url: `/articles/id/${id}`,
    method: "GET",
    interceptors: {
      responceInterceptor: (res: any) => {
        return res.data;
      },
    },
  });
};

const getArticleByNum = async (num: number) => {
  return sydRequest.request({
    url: `/articles/${num}`,
    method: "GET",
    interceptors: {
      responceInterceptor: (res: any) => {
        return res.data;
      },
    },
  });
};

const getMetadata = async () => {
  return sydRequest.request({
    url: "/metadata",
    method: "GET",
    interceptors: {
      responceInterceptor: (res: any) => {
        return res.data;
      },
    },
  });
};

const getPictures = async () => {
  return sydRequest.request({
    url: `/pictures`,
    method: "GET",
    interceptors: {
      responceInterceptor: (res: any) => {
        return res.data;
      },
    },
  });
};

export {
  getArticles,
  getArticleById,
  getArticleByNum,
  getMetadata,
  getPictures,
};
