export const UserReducer = (state, action) => {
    switch (action.type) {
        case "REGISTRATION_SUCCEEDED":
            return {
                loggedIn: true,
                registered: true,
                message: action.payload.message
            };

        case "REGISTRATION_FAILED":
            return { loggedIn: false, message: action.payload.message };

        case "LOGIN_SUCCEEDED":
            const token = action.payload.token.split(" ")[1];
            localStorage.setItem("token", token);
            return { loggedIn: true };

        case "LOGIN_FAILED":
            return { loggedIn: false, message: action.payload.error };

        case "LOGOUT":
            localStorage.removeItem("token");
            return { loggedIn: false };

        case "VALIDATION_SUCCEEDED":
            return { loggedIn: true };

        case "VALIDATION_FAILED":
            localStorage.removeItem("token");
            return { loggedIn: false, message: action.payload.error };

        default:
            return state;
    }
};
