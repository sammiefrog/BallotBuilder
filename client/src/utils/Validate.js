import axios from "axios";

const Validate = () => {
    const reply = axios.get('/api/user/validate', { headers: { Authorization: `Bearer $localStorage.getItem('token')` } })
    
    return reply;
}

export default Validate;