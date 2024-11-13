import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContexts';

function ToggleSwitch() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div 
      className={`toggle-switch ${isDarkMode ? 'active' : ''}`} 
      onClick={toggleTheme}
    >
      <span className="toggle-circle"></span>
    </div>
  );
}

export default ToggleSwitch;
