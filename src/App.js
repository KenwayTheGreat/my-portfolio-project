import React, { useState } from "react";

import Navbar from "./Components/Navbar/Navbar";
import AllFather from "./Components/AllFather/AllFather";

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
    <React.Fragment>
      <Navbar
        navbarState={navbarOpen}
        handleNavbar={handleNavbar}
        handleActiveWork={handleActiveWork}
        handleActiveSkills={handleActiveSkills}
      />
      <AllFather
        activeStateWork={activeWork}
        activeStateSkills={activeSkills}
      />
    </React.Fragment>
  );
}

export default App;
