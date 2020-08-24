import React from "react";
import { CollapseWrapper, NavLinks, Anchor } from "./DropdownMenuStyle";
import { useSpring } from "react-spring";

export default function DropdownMenu(props) {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate((openValue) => `translate3d(0, ${openValue}px, 0`),
        }}
      >
        <NavLinks>
          <li>
            <Anchor
              activeClass="active"
              to="homeSection"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={props.handleNavbar}
            >
              Home
            </Anchor>
          </li>
          <li>
            <Anchor
              activeClass="active"
              to="workSection"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={props.handleNavbar}
            >
              Work
            </Anchor>
          </li>
          <li>
            <Anchor
              activeClass="active"
              to="portfolioSection"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={props.handleNavbar}
            >
              Portfolio
            </Anchor>
          </li>
          <li>
            <Anchor
              activeClass="active"
              to="resumeSection"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={props.handleNavbar}
            >
              Resume
            </Anchor>
          </li>

          <li>
            <Anchor
              activeClass="active"
              to="aboutSection"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={props.handleNavbar}
            >
              About
            </Anchor>
          </li>

          <li>
            <Anchor
              activeClass="active"
              to="contactSection"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={props.handleNavbar}
            >
              Contact
            </Anchor>
          </li>
        </NavLinks>
      </CollapseWrapper>
    );
  } else {
    return null;
  }
}
