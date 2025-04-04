import { useEffect, useRef } from "react";
import request from "../utils/request.js";

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
}

