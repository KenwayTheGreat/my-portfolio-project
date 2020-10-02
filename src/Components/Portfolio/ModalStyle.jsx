import styled, { keyframes } from "styled-components";
import Modal from "react-modal";

const scale = keyframes`
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
`;

export const ProjectModalR = styled(Modal)`
  margin: auto;
  margin-top: 150px;
  width: 500px;
  height: 500px;
  background: #33ccff;
  max-height: 100vh;
  overflow-y: auto;
  animation: ${scale} 0.15s linear;
  border-radius: 10px;
  outline: 0;

  @media (max-width: 575px) {
    width: 300px;
    height: 500px;
  }
`;

export const ProjectModalA = styled(Modal)`
  margin: auto;
  margin-top: 150px;
  width: 500px;
  height: 500px;
  background: #e60000;
  max-height: 100vh;
  overflow-y: auto;
  animation: ${scale} 0.15s linear;
  border-radius: 10px;
  outline: 0;

  @media (max-width: 575px) {
    width: 300px;
    height: 500px;
  }
`;

export const ProjectModalF = styled(Modal)`
  margin: auto;
  margin-top: 200px;
  width: 500px;
  height: 500px;
  background: #0099ff;
  max-height: 100vh;
  overflow-y: auto;
  animation: ${scale} 0.15s linear;
  border-radius: 10px;
  outline: 0;

  @media (max-width: 575px) {
    width: 300px;
    height: 500px;
  }
`;

export const ProjectModalB = styled(Modal)`
  margin: auto;
  margin-top: 200px;
  width: 500px;
  height: 500px;
  background: #9900cc;
  max-height: 100vh;
  overflow-y: auto;
  animation: ${scale} 0.15s linear;
  border-radius: 10px;
  outline: 0;

  @media (max-width: 575px) {
    width: 300px;
    height: 500px;
  }
`;

export const ProjectModalU = styled(Modal)`
  margin: auto;
  margin-top: 200px;
  width: 500px;
  height: 500px;
  background: black;
  max-height: 100vh;
  overflow-y: auto;
  animation: ${scale} 0.15s linear;
  border-radius: 10px;
  outline: 0;

  @media (max-width: 575px) {
    width: 300px;
    height: 500px;
  }
`;

export const ProjectModalP = styled(Modal)`
  margin: auto;
  margin-top: 200px;
  width: 500px;
  height: 500px;
  background: #3399ff;
  max-height: 100vh;
  overflow-y: auto;
  animation: ${scale} 0.15s linear;
  border-radius: 10px;
  outline: 0;

  @media (max-width: 575px) {
    width: 300px;
    height: 500px;
  }
`;

export const ProjectModalI = styled(Modal)`
  margin: auto;
  margin-top: 200px;
  width: 500px;
  height: 500px;
  background: #1a8cff;
  max-height: 100vh;
  overflow-y: auto;
  animation: ${scale} 0.15s linear;
  border-radius: 10px;
  outline: 0;

  @media (max-width: 575px) {
    width: 300px;
    height: 500px;
  }
`;

export const ProjectModalW = styled(Modal)`
  margin: auto;
  margin-top: 200px;
  width: 500px;
  height: 500px;
  background: #0099cc;
  max-height: 100vh;
  overflow-y: auto;
  animation: ${scale} 0.15s linear;
  border-radius: 10px;
  outline: 0;

  @media (max-width: 575px) {
    width: 300px;
    height: 500px;
  }
`;

export const ModalTitle = styled.h1`
  margin-top: 55px;
  font-size: 40px;
  text-align: center;
  color: white;

  @media (max-width: 575px) {
    padding: 0px 15px;
  }
`;

export const ModalSent = styled.h3`
  margin-top: 65px;
  font-size: 20px;
  text-align: center;
  color: white;

  @media (max-width: 575px) {
    padding: 0px 15px;
    font-size: 15px;
  }
`;

export const Wrap = styled.div`
  margin: auto;
  width: 450px;

  @media (max-width: 575px) {
    width: 250px;
  }
`;

export const CardTest = styled.div`
  margin: 17.5px;
  width: 25%;
  height: 160px;
  display: inline-block;
  text-align: center;
  background-color: black;
  border-radius: 7px;

  @media (max-width: 575px) {
    width: 40%;
    margin: 10px;
  }
`;

export const CardTitle = styled.h4`
  margin-top: 15px;
  font-size: 20px;
  height: 70px;
  color: white;
`;

export const CardLine = styled.hr`
  color: white;
`;

export const CardClick = styled.a`
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  color: #00cc99;

  &: hover {
    color: white;
  }
`;

export const CloseBtn = styled.button`
  font-size: 30px;
  color: white;
  background: transparent;
  border: none;
  cursor: pointer;
  float: right;
  outline: 0;
`;
