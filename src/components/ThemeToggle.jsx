import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Sinkronkan state dengan class 'dark' di <html>
        setIsDarkMode(document.documentElement.classList.contains("dark"));
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return ( 
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-700 transition"
            aria-label="Toggle theme"
        >
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-400" /> 
            ) : (
                <Moon className="h-6 w-6 text-blue-900" />
            )}
        </button>
    );
};