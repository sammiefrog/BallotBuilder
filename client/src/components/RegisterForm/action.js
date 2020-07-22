import axios from "axios";

export const SendRegistration = async (username, password) => {
    try {
        const reply = axios({
            method: "POST",
            url: "/api/user/register",
            data: { username, password }
        });
        return reply;
    } catch (error) {
        console.log(error);
    }
};
