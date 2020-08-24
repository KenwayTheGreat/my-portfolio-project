import styled from "styled-components";
import { Link } from "react-scroll";
import { animated } from "react-spring";

export const HomeS = styled.div`
  height: 700px;
  background-image: url("images/home-page.jpg");
  background-size: cover;
  background-position: center;
  text-align: center;
  position: relative;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #1761a0;
  font-size: 15px;
  opacity: 0.5;
`;

export const HomeInformation = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const HomeTitle = styled(animated.h2)`
  font-size: 60px;
  font-weight: bold;
  color: white;

  @media (max-width: 768px) {
    font-size: 40px;
    color: #fff;
  }

  @media (max-width: 575px) {
    font-size: 30px;
  }
`;

export const HomeInfo = styled(animated.h4)`
  font-size: 35px;
  color: #eb5424;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const HomeDesc = styled(animated.p)`
  font-size: 20px;
  line-height: 1.5;
  color: white;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const Span = styled.span`
  color: #eb5424;
  font-weight: bold;
`;

export const HomeBtn = styled(Link)`
  background: #eb5424;
  color: #fff;
  font-size: 18px;
  width: 150px;
  border: 0;
  padding: 15px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 5px;

  &:hover {
    background: #1761a0;
    color: #fff;
  }
`;
