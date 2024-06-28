import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Wrapper from "./Components/Wrapper";

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeWork, setActiveWork] = useState(false);
  const [activeSkills, setActiveSkills] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleActiveWork = () => {
    setActiveWork(!activeWork);
  };

  const handleActiveSkills = () => {
    setActiveSkills(!activeSkills);
  };

  return (
    <>
      <Navbar
        navbarState={navbarOpen}
        handleNavbar={handleNavbar}
        handleActiveWork={handleActiveWork}
        handleActiveSkills={handleActiveSkills}
      />
      <Wrapper
        activeStateSkills={activeSkills}
      />
    </>
  );
}

export default App;
