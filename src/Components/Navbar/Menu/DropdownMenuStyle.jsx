import styled from "styled-components";
import { animated } from "react-spring";
import { Link } from "react-scroll";

export const CollapseWrapper = styled(animated.div)`
  background: white;
  position: fixed;
  top: 6.5rem;
  left: 0;
  right: 0;
  z-index: 1;
`;

export const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
    border-bottom: 1px solid #eb5424;
    text-align: center;
  }
`;

export const Anchor = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2;
  color: #1761a0;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #eb5424;

  }
`;
