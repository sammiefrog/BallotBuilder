import axios from 'axios';

export const SendRegistration = (username, password) => {
    const reply = axios({
      method: "POST",
      url: "/api/user/register",
      data: { username, password },
    });
    return reply;
}