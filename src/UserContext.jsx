import { useEffect, useState, createContext } from 'react';
import { LOGIN_POST, USER_GET } from './api';

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
    const [data, setData] = useState(null);
    const [login, setLogin] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function getUser(token) {
        try {
            setError(null);
            setLoading(true);
            const { url, options } = USER_GET(token);
            const response = await fetch(url, options);

            if (!response.ok) throw new Error('Failed to fetch user data');

            const json = await response.json();
            setData(json);
            setLogin(true);
        } catch (err) {
            console.log(err);
            setError(err.message);
            setLogin(false);
        } finally {
            setLoading(false);
        }
    }

    async function userLogin(username, password) {
        try {
            setError(null);
            setLoading(true);
            const { url, options } = LOGIN_POST({ username, password });
            const response = await fetch(url, options);

            if (!response.ok) throw new Error('Login failed');

            const json = await response.json();

            if (json.key) {
                window.localStorage.setItem('token', json.key);
                await getUser(json.key);
            } else {
                throw new Error('No token received from server');
            }
        } catch (err) {
            setError(err.message);
            setLogin(false);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        if (token) {
            getUser(token);
        }
    }, []);

    const user = data || {};
    const username = user?.username || 'Guest';

    return (
        <UserContext.Provider value={{ userLogin, data, login, loading, error }}>
            {children}
        </UserContext.Provider>
    );
};
