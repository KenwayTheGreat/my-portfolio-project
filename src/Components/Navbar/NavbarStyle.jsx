import styled from "styled-components";
import { Link } from "react-scroll";
import { animated } from "react-spring";

export const NavbarPlace = styled(animated.div)`
  padding: 3px 0;
  overflow: hidden;
  background: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  border-bottom: 1px solid #000;
`;

export const Logo = styled.div`
  width: 50%;
  display: inline-block;
  float: left;
  color: #000;
  background-repeat: no-repeat;

  @media (max-width: 991px) {
    width: 50%;
    justify-content: center;
  }
`;

export const LogoText = styled.img`
  padding: 1rem;
`;

export const UlList = styled(animated.ul)`
  width: 50%;
  float: left;
  list-style: none;
  padding: 0;
  margin-top: 30px;


  @media (max-width: 991px) {
    width: 100%;
    float: none;
    margin-top: 20px;
    display: none;
  }
`;

export const ListItem = styled.li`
  display: inline-block;

  @media (max-width: 991px) {
    display: block;
    text-align: center;
  }
`;

export const AnchorCl = styled(Link)`
  display: block;
  color: #1761a0;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: #eb5424;
  }

  &.active {
    color: #eb5424;
  }
`;

export const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;
