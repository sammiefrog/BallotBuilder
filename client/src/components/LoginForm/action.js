// importing necessary dependency
import axios from "axios";

// login information posted by user
const SendLoginInfo = async (username, password) => {
    try {
        const reply = await axios({
            method: "POST",
            url: "/api/user/login",
            data: { username, password }
        });
        return reply;
    } catch (error) {
        console.log(error);
    }
};

// exporting for use in other parts of the application
export default SendLoginInfo;
