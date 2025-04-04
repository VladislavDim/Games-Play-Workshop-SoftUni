import { useContext, useEffect, useRef } from "react";
import request from "../utils/request.js";
import { UserContext } from "../context/userContext.js";

const baseUrl = 'http://localhost:3030/users';

export const useLogin = () => {
    const abortRef = useRef();

    const login = async (email, password) => {

        abortRef.current?.abort();
        abortRef.current = new AbortController();

        return request.post(`${baseUrl}/login`, { email, password }, { signal: abortRef.current.signal });

    }

    useEffect(() => {
        return () => abortRef.current?.abort();
    }, []);

    return {
        login
    }
};

export const useRegister = () => {
    const register = (email, password) => {
        return request.post(`${baseUrl}/register`, { email, password });
    };

    return {
        register
    }
};

export const useLogout = () => {
    const { accessToken, userLogoutHandler } = useContext(UserContext);

    useEffect(() => {

        if (!accessToken) {
            return;
        }

        const options = {
            headers: {
                'X-Authorization': accessToken
            }
        };

        request.get(`${baseUrl}/logout`, null, options)
            .then(userLogoutHandler);


    }, [accessToken, userLogoutHandler]);

    return {
        isLoggedOut: !!accessToken
    };
};