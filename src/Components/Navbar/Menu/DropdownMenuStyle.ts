import styled from "styled-components";
import { animated } from "react-spring";
import { Link } from "react-scroll";

export const CollapseWrapper = styled(animated.div)`
  background: white;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1;

  @media (max-width: 851px) and (min-width: 450px) {
    top: 7.5rem;
  }

  @media (max-width: 451px) {
    top: 6.25rem;
  }
`;

export const NavLinks = styled.ul`
  list-style-type: none;
  padding: 0 28px;

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

  &.active {
    color: #eb5424;
  }
`;
