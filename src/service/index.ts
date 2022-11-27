import SYDRequest from "./api/index";
import { BASE_URL, TIME_OUT } from "./api/config";

const sydRequest = new SYDRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responceInterceptor: (config) => {
      return config
    },
    responceInterceptorCatch: (err) => {
      return err
    },
  }
});

const getArticleById = async (num:number) => {
  return sydRequest.request({
    url: `/articles/test_articlae_id_${num}`,
    method: "GET",
    interceptors: {
      responceInterceptor: (res: any) => {
        return res.data
      }
    }
  })
}

export default getArticleById;
