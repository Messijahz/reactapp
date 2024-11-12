import React, { useState, useEffect } from 'react';

function ToggleSwitch() {
// Fick hjälp av AI hur jag skulle skriva kodsnutten för getInitialTheme för att spara och hämta data ur localStorage.
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    } else {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  };

  const [isActive, setIsActive] = useState(getInitialTheme);

  const handleToggle = () => {
    const newTheme = !isActive ? 'dark' : 'light';
    setIsActive(!isActive);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    if (isActive) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isActive]);

  return (
    <div 
      className={`toggle-switch ${isActive ? 'active' : ''}`} 
      onClick={handleToggle}
    >
      <span className="toggle-circle"></span>
    </div>
  );
}

export default ToggleSwitch;
