import axios from "axios";

const SendLoginInfo = async (username, password) => {
    try {
        const reply = await axios({
            method: "POST",
            url: "/api/user/login",
            data: { username, password }
        });
        return reply;
    } catch (error) {
        console.log(error)
    }
};

export default SendLoginInfo;
