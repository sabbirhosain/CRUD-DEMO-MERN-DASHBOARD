import axios from 'axios'
import React, { createContext, useContext, useState } from 'react'

const App_Context_Provider = createContext()
const App_Context = ({ children }) => {

    // ineselize state
    const [user, setUser] = useState({
        isLoading: false,
        data: [],
        pagination: null,
        search: '',
        status: '',
        to_date: '',
        from_date: '',
        error_message: null
    })

    // update ineselize state
    const updateUserState = (newState) => {
        setUser(prev => ({ ...prev, ...newState }));
    };

    // fetch user data
    const getUserData = async (page) => {
        try {
            updateUserState({ isLoading: true, error_message: null });
            const response = await axios.get('http://localhost:8000/api/v1/items/premium/checkout', {
                params: { search: user.search, status: user.status, to_date: user.to_date, from_date: user.from_date, page: page }
            })

            if (response && response.data) {
                updateUserState({
                    data: response.data.payload || [],
                    pagination: response.data.pagination || null
                });
            }

        } catch (error) {
            if (error.response) {
                updateUserState({
                    error_message: error.response.data.message || 'Internal Server Error'
                })
            } else if (error.request) {
                updateUserState({
                    error_message: 'No response received from server'
                })
            } else {
                updateUserState({
                    error_message: error.message || 'Request setup error'
                })
            }
            throw error;
        } finally {
            updateUserState({ isLoading: false });
        }
    }



    return (
        <App_Context_Provider.Provider value={{ getUserData, user, updateUserState }}>
            {children}
        </App_Context_Provider.Provider>
    )
}

export default App_Context

// coustom hooks
export const useApp_Context_Provider = () => {
    return useContext(App_Context_Provider)
};