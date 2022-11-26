import SYDRequest from "./request/index";
import { BASE_URL, TIME_OUT } from "./request/config";

const sydRequest = new SYDRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // console.log(1);
      return config
    },
    requestInterceptorCatch: (err) => {
      // console.log(2);
      return err
    },
    responceInterceptor: (config) => {
      // console.log(3);
      return config
    },
    responceInterceptorCatch: (err) => {
      // console.log(4);
      return err
    },
  }
});

export default sydRequest;
