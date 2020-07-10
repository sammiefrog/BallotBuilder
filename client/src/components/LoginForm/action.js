import axios from "axios";

const SendLoginInfo = (username, password) => {
  const response = axios({
    method: "POST",
    url: "/api/user/login",
    data: { username, password },
  });
  return response;
};

export default SendLoginInfo;