import styled from "styled-components";

export const ContactS = styled.div`
  margin-top: 100px;
  padding: 50px 0;
  text-align: center;
  background-color: white;
`;

export const ContactTitle = styled.h2`
  font-size: 60px;
  margin-bottom: 30px;
  color: #1761a0;

  @media (max-width: 575px) {
    font-size: 40px;
  }
`;

export const Span = styled.span`
  font-weight: normal;
  color: #eb5424;
`;

export const Form = styled.form`
  width: 70%;
  margin: auto;

  @media (max-width: 575px) {
    width: 90%;
  }
`;

export const Input = styled.input`
box-sizing: border-box;
  outline: 0;
  padding: 5px;
  margin-bottom: 10px;

  @media (max-width:575px) {
      width: 100%
  }
}
`;

export const FormInput = styled.div`
  overflow: hidden;
`;

export const InputText = styled(Input)`
  float: left;
  width: 49%;
  border-radius: 5px;
  border: solid 2px #1761a0;
  margin-top: 20px;
  color: black;
  padding-left: 15px;
  font-weight: bold;

  &:focus {
    border: solid 2px #eb5424;
  }
`;

export const InputEmail = styled(Input)`
  float: right;
  width: 49%;
  border-radius: 5px;
  border: solid 2px #1761a0;
  margin-top: 20px;
  color: black;
  padding-left: 15px;
  font-weight: bold;

  &:focus {
    border: solid 2px #eb5424;
  }
`;

export const InputExp = styled(Input)`
  width: 100%;
  border-radius: 5px;
  border: solid 2px #1761a0;
  margin-top: 20px;
  color: black;
  padding: 10px;
  font-weight: bold;

  &:focus {
    border: solid 2px #eb5424;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  outline: 0;
  background: white;
  border-radius: 10px;
  border: solid 2px #1761a0;
  padding-left: 15px;
  font-size: 15px;
  padding-top: 5px;
  color: black;
  font-weight: bold;
  margin-top: 20px;

  &:focus {
    border: solid 2px #eb5424;
  }
`;

export const InputSubmit = styled(Input)`
  width: 30%;
  background: #eb5424;
  font-size: 15px;
  font-weight: bold;
  border: 1px solid #ccc;
  color: white;
  cursor: pointer;
  margin-top: 20px;
  padding: 15px;
  border-radius: 5px;

  &:hover {
    background: #1761a0;
    color: #fff;
  }
`;
