import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  padding: 12px 0 12px 12px;
  cursor: pointer;
  width: fit-content;
  height: fit-content;

  & span {
    background: #1761a0;
    border-radius: 25px;
    display: block;
    position: relative;
    width: 2.5rem;
    height: 0.25rem;
    margin-bottom: 0.5rem;
    transition: all ease-in-out 0.2s;
  }

  .open span:nth-child(2) {
    opacity: 0;
  }

  .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -12px;
    background: #eb5424;
  }

  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 12px;
    background: #eb5424;
  }
`;
