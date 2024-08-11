
"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

const initialFmaosConfig = {
    initialOffset: 30,
    transition: {
        type: "spring",
    },
    viewport: {
        once: true,
        amount: "all",
    },
};

const FmaosConfigContext = createContext();

export const FmaosConfigProvider = ({ children }) => {
    const [fmaosConfig, setFmaosConfig] = useState(initialFmaosConfig);

    return (
        <FmaosConfigContext.Provider value={{ fmaosConfig, setFmaosConfig }}>
            {children}
        </FmaosConfigContext.Provider>
    );
};

export const useFmaosConfig = () => {
    const context = useContext(FmaosConfigContext);
    if (!context) {
        throw new Error('useConfig must be used within a ConfigProvider');
    }
    return context;
};
