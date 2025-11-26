import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
export const SiteContext = createContext();

const SiteContextProvider = ({ children }) => {
    const [allTodo, setAllTodo] = useState([])

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}api/todo/list`)
            .then((response) => {
                setAllTodo(response.data.todos);
            })
            .catch((error) => {
                console.log("Error fetching todos: ", error);
            });
    }, [])

    const values = {
        allTodo
    };

    return (
        <SiteContext.Provider value={values}>
            {children}
        </SiteContext.Provider>
    );
};

export default SiteContextProvider;
