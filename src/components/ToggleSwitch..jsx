import React, { useState, useEffect } from 'react';


function ToggleSwitch() { // Vi gör en funktion som sätter isActive till false.
  const [isActive, setIsActive] = useState(false);  //Håller koll på om knappen är aktiv eller inte, alltså ljust eller mörkt läge och setIsActive används för att uppdatera isActive..

  const handleToggle = () => { // Skapar funktionen handleToggle som skiftar värde på isActive när knappen trycks på (true eller false).
    setIsActive(!isActive);
  };

  useEffect(() => { // Lägger till temat dark på body om knappen är true och sätter false om det inte är det.
    if (isActive) {
      document.body.classList.add('dark'); // Lägger till dark på body om värdet är true.
    } else {
      document.body.classList.remove('dark'); // Tar bord klassen dark på body om värdet är false.
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
