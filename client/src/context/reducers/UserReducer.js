export const UserReducer = (state, action) => {
    switch (action.type) {
        case "REGISTRATION_SUCCEEDED":
            const registrationToken = action.payload.token.split(" ")[1];
            localStorage.setItem("token", registrationToken);
            return {
                loggedIn: true,
                registered: true,
                token: registrationToken,
                message: action.payload.message
            };

        case "REGISTRATION_FAILED":
            return { loggedIn: false, message: action.payload.message };

        case "LOGIN_SUCCEEDED":
            const loginToken = action.payload.token.split(" ")[1];
            localStorage.setItem("token", loginToken);
            return { loggedIn: true, token: loginToken };

        case "LOGIN_FAILED":
            return { loggedIn: false, message: action.payload.error };

        case "LOGOUT":
            localStorage.removeItem("token");
            return { loggedIn: false };

        default:
            return state;
    }
};
