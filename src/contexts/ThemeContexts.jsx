import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext(); // Skapar contexten ThemeContext som innehåller mina värden och i detta fallet mina temainställningar.

const getInitialTheme = () => { // Denna funktion bestämmer vilket tema som ska laddas beroende på vad användaren har förinställt eller om användaren sparat något tema sen innan som ska laddas.
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme === 'dark';
  } else {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
};

export const ThemeProvider = ({ children }) => { // ThemeProvider är en komponent som levererar temat till andra komponenter och där children är de komponenter som ska ha tillgång till temat.
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme); //isDarMode får värdet från getInitialTheme om användaren har något tema som föredras från innan (localStorage) eller systemets sparade tema.

  const toggleTheme = () => { // Skapar en funktion som växlar mellan ljust och mörkt tema.
    const newTheme = !isDarkMode ? 'dark' : 'light'; //Får värdet dark eller light beroende på isDarkMode.
    setIsDarkMode(!isDarkMode); // Ger isDarkMode motsatsen av sitt nuvarande värde.
    localStorage.setItem('theme', newTheme); // Sparar värdet användaren föredrar.
  };

  useEffect(() => { //useEffect kommer att köras varje gång isDarkMode ändras.
    if (isDarkMode) {
      document.body.classList.add('dark'); // Om isDarkMode är true så kommer klassen att läggas till på body och sparas i localStorage.
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark'); // Är värdet false så sparar vi istället light i localStorage och tar bort klassen dark från body.
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // ThemeProvider retunerar en ThemeContext.provider som delar värdena {{ isDarkMode, toggleTheme }} så att de blir tillgängliga för alla komponenter som omges att ThemeProvider i app.jsx.
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}> 
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider
