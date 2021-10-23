import axios from "axios";
import { notification } from "antd";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("An unexpected Error occured", error);
    notification.error({
      message: "Error",
      description: "An unexpected Error occured",
    });
  }
  return Promise.reject(error);
});
