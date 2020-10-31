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

  @media (max-width: 851px) {
    width: 25%;
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

  @media (max-width: 860px) {
    width: 85%;
    float: none;
    margin-top: 60px;
    display: none;
   
  }
`;

export const ListItem = styled.li`
  display: inline-block;
`;

export const AnchorCl = styled(Link)`
  display: block;
  color: #1761a0;
  text-decoration: none;
  padding: 10px 10px;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: #eb5424;
  }

  &.active {
    color: #eb5424;
  }

  @media (max-width:1330px  ) {
    text-align: center;
    font-size: 17px;
    padding: 10px 0px;
    margin: 3.5px;
  }

  @media (max-width:920px  ) {
    text-align: center;
    font-size: 15px;
    padding: 10px 0px;
    margin: 5px;
  }
`;

export const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 860px) {
    display: none;
  }
`;
