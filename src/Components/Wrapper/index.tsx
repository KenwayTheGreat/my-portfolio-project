import React from "react";

import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer";
import Home from "../Home";
import Portfolio from "../Portfolio/Portfolio";
import Profile from "../Profile/Profile";
import SocialMedia from "../SocialMedia/SocialMedia";
import Work from "../Work/Work";

interface Props {
  activeStateSkills: boolean;
}

export default function Wrapper({ activeStateSkills }: Props) {
  return (
    <div className="wrapper_div">
      <Home />
      <About />
      <Work />
      <Portfolio />
      <Profile activeStateSkills={activeStateSkills} />
      <Contact />
      <SocialMedia />
      <Footer />
    </div>
  );
}
