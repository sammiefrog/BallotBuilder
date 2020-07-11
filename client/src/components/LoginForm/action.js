import axios from "axios";

const SendLoginInfo = (username, password) => {
  const reply = axios({
    method: "POST",
    url: "/api/user/login",
    data: { username, password },
  });
  return reply;
};

export default SendLoginInfo;