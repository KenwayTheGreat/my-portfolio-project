import styled from "styled-components";
import { Link } from "react-scroll";
import { animated } from "react-spring";

export const Navigation = styled(animated.header)`
  padding: 12px 0;
  overflow: hidden;
  background: #fff;
  position: fixed;
  width: 100%;
  height: fit-content;
  top: 0;
  left: 0;
  z-index: 1;
  border-bottom: 1px solid #000;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 851px) {
    justify-content: space-between;
  }
`;

export const LogoDesktopWrapper = styled.div`
  width: 20%;
  height: fit-content;
  color: #000;
  background-repeat: no-repeat;

  @media (max-width: 851px) {
    display: none;
  }
`;

export const LogoDeviceWrapper = styled.div`
  width: 45%;
  height: fit-content;
  color: #000;
  background-repeat: no-repeat;
  display: none;

  @media (max-width: 851px) and (min-width: 450px) {
    display: block;
    width: 25%;
  }

  @media (max-width: 451px) {
    display: block;
    width: 45%;
  }
`;

export const Logo = styled.img`
  width: 70%;
`;

export const UlList = styled(animated.ul)`
  width: fit-content;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 860px) {
    float: none;
    display: none;
  }
`;

export const ListItem = styled.li`
  display: inline-block;
`;

export const AnchorLink = styled(Link)`
  color: #1761a0;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  display: block;
  padding: 10px 10px;
  cursor: pointer;
  transition: color 0.25s ease, transform 0.25s ease;

  &:hover {
    text-underline-offset: 8px;
    text-decoration: underline;
    text-decoration-thickness: 1.5px;
    color: #eb5424;
  }

  &.active {
    color: #eb5424;
  }

  @media (max-width: 1330px) {
    text-align: center;
    font-size: 17px;
    padding: 10px 0px;
    margin: 3.5px;
  }

  @media (max-width: 920px) {
    text-align: center;
    font-size: 15px;
    padding: 10px 0px;
    margin: 5px;
  }
`;

export const BurgerWrapper = styled.div`
  display: block;

  @media (min-width: 860px) {
    display: none;
  }
`;
