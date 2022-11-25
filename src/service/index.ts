import SYDRequest from "./request/index";
import { BASE_URL, TIME_OUT } from "./request/config";

const sydRequest = new SYDRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
});

export default sydRequest;
