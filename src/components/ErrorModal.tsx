import { Modal } from "antd";

const ErrorModal = (error: any) => {
  let content: String = "Server Error";
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log("[ErrorModal] Response error:");
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
    content = error.response.data.message;
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log("[ErrorModal] Request error:");
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("Error", error.message);
  }
  console.log(error.config);

  Modal.error({
    title: "Error",
    content,
  });
};

export default ErrorModal;
