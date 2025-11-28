import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const SiteContext = createContext();

const SiteContextProvider = ({ children }) => {
    const [allTodo, setAllTodo] = useState([]);

    const fetchTodos = async () => {
        const res = await axios.get(
            `${import.meta.env.VITE_BASE_URL}api/todo/list`
        );
        setAllTodo(res.data.todos);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const values = {
        allTodo, setAllTodo, fetchTodos

    }
    return (
        <SiteContext.Provider value={values}>
            {children}
        </SiteContext.Provider>
    );
};

export default SiteContextProvider;
