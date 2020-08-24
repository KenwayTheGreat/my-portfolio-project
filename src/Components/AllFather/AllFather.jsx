import React from "react";

import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Portfolio from "../Portfolio/Portfolio";
import Profile from "../Profile/Profile";
import SocialMedia from "../SocialMedia/SocialMedia";
import Work from "../Work/Work";

export default function AllFather(props) {
  return (
    <div>
      <Home />
      <Work activeStateWork={props.activeStateWork} />
      <Portfolio />
      <Profile activeStateSkills={props.activeStateSkills} />
      <About />
      <Contact />
      <SocialMedia />
      <Footer />
    </div>
  );
}
