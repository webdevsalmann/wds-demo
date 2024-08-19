"use client"
import { createContext, useState, useEffect, useContext } from 'react';
const WaitlistContext = createContext();

export function WaitlistProvider({ children }) {
    const initialUsers = 1617;
    const [totalUser, setTotalUser] = useState(initialUsers);

    const getSubmissionCount = async () => {
        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbyO-Tm8rOxEDYRLU3DlpyWonJG0lKpyxnk1bRu6ffFVbgumoTpDIY8eWzJonk5LQuxD1g/exec');
            const count = await response.text();
            setTotalUser(initialUsers + Number(count));
        } catch (error) {
            console.error('Failed to fetch submission count:', error);
        }
    };

    useEffect(() => {
        getSubmissionCount();
    }, []);

    return (
        <WaitlistContext.Provider value={{ totalUser, getSubmissionCount }}>
            {children}
        </WaitlistContext.Provider>
    );
};

export default function useWaitlist() {
    return useContext(WaitlistContext);
};