import axios from "axios";

// validating user
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

// exporting for use in other parts of the application
export default Validate;
