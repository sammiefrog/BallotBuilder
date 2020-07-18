import React, { createContext, useReducer } from "react";
import { UserReducer } from "../reducers/UserReducer";
import decode from "jwt-decode";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [user, dispatch] = useReducer(UserReducer, { loggedIn: false }, () => {
        const token = localStorage.getItem("token");

        if (token) {
            const currentTime = Date.now() / 1000;
            try {
                const { exp } = decode(token);
                if (exp > currentTime) {
                    return { loggedIn: true };
                } else if (currentTime >= exp) {
                    localStorage.removeItem("token");
                    return { loggedIn: false };
                }
            } catch (error) {
                localStorage.removeItem("token");
                return { loggedIn: false };
            }
        } else {
            return { loggedIn: false };
        }
    });

    return <UserContext.Provider value={{ user, dispatch }}>{children}</UserContext.Provider>;
};
