import axios from "axios";

export const SendLoginInfo = (username, password) => {
  const reply = axios.post("/api/user/register",
    { data: { username, password } });
  return reply;
};

