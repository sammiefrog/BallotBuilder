export const UserReducer = (state, action) => {
    switch (action.type) {
        case "REGISTRATION_SUCCEEDED":
            const registrationToken = action.payload.token.split(" ")[1];
            const regId = action.payload.id;
            localStorage.setItem("token", registrationToken);
            return {
                loggedIn: true,
                registered: true,
                id: regId,
                message: action.payload.message
            };

        case "REGISTRATION_FAILED":
            return { loggedIn: false, message: action.payload.message };

        case "LOGIN_SUCCEEDED":
            const loginToken = action.payload.token.split(" ")[1];
            const id = action.payload.id;
            localStorage.setItem("token", loginToken);
            return { loggedIn: true, id: id };

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
