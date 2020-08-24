import styled from "styled-components";

export const PortfolioS = styled.div`
  margin-top: 150px;
  padding-top: 100px;
  background: #f8f8f8;
  margin-top: 300px;
  overflow: hidden;

  @media (max-width: 575px) {
    display: block;
    margin: auto;
  }
`;

export const PortfolioTitle = styled.h1`
  text-align: center;
  font-size: 35px;
  color: #1761a0;
`;

export const Span = styled.span`
  font-weight: normal;
  color: #eb5424;
`;

export const Box = styled.div`
  @media (max-width: 575px) {
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  width: 25%;
  float: left;
  font-size: 0;
  position: relative;

  &:hover > div {
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 100%;
  @media (min-width: 576px) and (max-width: 768px) {
    width: 50%;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  font-size: 15px;
  color: white;
  opacity: 0;

  ${(props) => {
    if (props.name === "react") {
      return `
        background: rgba(0, 145, 255, 0.5);
    `;
    } else if (props.name === "angular") {
      return `
        background:  rgba(255, 0, 0, 0.5);
    `;
    } else if (props.name === "flutter") {
      return `
        background:  rgba(255, 255, 255, 0.5);
    `;
    } else if (props.name === "bootstrap") {
      return `
        background:  rgba(115, 0, 255, 0.5);
    `;
    } else if (props.name === "unity") {
      return `
        background:  rgba(255, 255, 255, 0.5);
    `;
    } else if (props.name === "photoshop") {
      return `
        background:  rgba(88, 150, 255, 0.5);
    `;
    } else if (props.name === "ionic") {
      return `
        background:  rgba(255, 255, 255, 0.5);
    `;
    } else {
      return `
        background: rgba(255, 255, 255, 0.5);
    `;
    }
  }}
`;

export const OverlaySpan = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  padding: 10px 20px;
  cursor: pointer;
  border: 2px solid white;
  border-radius: 5px;

  ${(props) => {
    if (props.name === "react") {
      return `
        background: #33ccff;
    `;
    } else if (props.name === "angular") {
      return `
        background: #ff0000;        
    `;
    } else if (props.name === "flutter") {
      return `
        background: #0099ff;
    `;
    } else if (props.name === "bootstrap") {
      return `
        background: #9900cc;
    `;
    } else if (props.name === "unity") {
      return `
        background: black;
    `;
    } else if (props.name === "photoshop") {
      return `
        background:  #3399ff;
    `;
    } else if (props.name === "ionic") {
      return `
        background: #1a8cff;
    `;
    } else {
      return `
        background: #0099cc;
    `;
    }
  }}
`;
