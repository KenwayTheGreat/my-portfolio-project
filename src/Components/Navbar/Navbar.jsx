import React from "react";
import { useSpring, config } from "react-spring";
import BurgerMenu from "./Menu/BurgerMenu";
import DropdownMenu from "./Menu/DropdownMenu";

import "./NavbarStyle.jsx";
import {
  NavbarPlace,
  Logo,
  LogoText,
  UlList,
  ListItem,
  AnchorCl,
  BurgerWrapper,
} from "./NavbarStyle.jsx";

export default function Navbar(props) {
  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)",
  });

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 1000,
    config: config.wobbly,
  });

  return (
    <React.Fragment>
      <NavbarPlace style={barAnimation}>
        <div className="container">
          <Logo>
            <LogoText src={"images/logo3-2.png"} />
          </Logo>

          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>

          <UlList style={linkAnimation}>
            <ListItem>
              <AnchorCl
                activeClass="active"
                to="homeSection"
                spy={true}
                smooth={true}
                offset={-300}
                duration={500}
              >
                Home
              </AnchorCl>
            </ListItem>
            <ListItem>
              <AnchorCl
                activeClass="active"
                to="workSection"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
              >
                Work
              </AnchorCl>
            </ListItem>
            <ListItem>
              <AnchorCl
                activeClass="active"
                to="portfolioSection"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                Portfolio
              </AnchorCl>
            </ListItem>
            <ListItem>
              <AnchorCl
                activeClass="active"
                to="resumeSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={props.handleActiveSkills}
                onSetInactive={props.handleActiveSkills}
              >
                Resume
              </AnchorCl>
            </ListItem>
            <ListItem>
              <AnchorCl
                activeClass="active"
                to="aboutSection"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                About
              </AnchorCl>
            </ListItem>
            <ListItem>
              <AnchorCl
                to="contactSection"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
              >
                Contact
              </AnchorCl>
            </ListItem>
          </UlList>
        </div>
      </NavbarPlace>
      <DropdownMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
    </React.Fragment>
  );
}
