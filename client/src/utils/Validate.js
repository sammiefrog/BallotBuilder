import axios from "axios";

const Validate = async () => {
    try {
        const reply = axios.get("/api/user/validate", {
            headers: { Authorization: `Bearer $localStorage.getItem('token')` }
        });

        return reply;
    } catch (error) {
        console.log(error);
    }
};

export default Validate;
