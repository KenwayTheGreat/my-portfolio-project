import styled from "styled-components";

export const WorkS = styled.div`
  height: 700px;
  padding: 50px 0;
  overflow: hidden;
  background: #fff;
`;

export const WorkTitle = styled.h2`
  margin-top: 75px;
  font-size: 60px;
  color: #1761a0;
`;

export const Span = styled.span`
  font-weight: normal;
  color: #eb5424;
`;

export const WorkPart = styled.div`
  margin-top: 30px;
  width: 30%;
  float: left;
  height: 500px;
  padding: 100px 0;
  border: 1px solid #888;
  box-sizing: border-box;
  text-align: center;
  margin-left: 5%;
  margin-left: ${(props) => (props.first === "1" ? "0" : "5%")};

  @media (max-width: 575px) {
    width: 100%;
    float: none;
    margin-left: 0;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    width: 47%;
  }
`;

export const Icon = styled.div`
  background-image: url("images/mobile-development.png");
  background-size: 120px 138px;
  background-position: center;
  background-repeat: no-repeat;
  height: 145px;
  margin-bottom: 20px;
  margin-left: 0;
`;

export const Icon2 = styled.div`
  background-image: url("images/front-end-development.png");
  background-size: 130px 115px;
  background-position: center;
  background-repeat: no-repeat;
  height: 145px;
  margin-bottom: 20px;
  margin-left: 0;
`;

export const Icon3 = styled.div`
  background-image: url("images/game-development.png");
  background-size: 125px 115px;
  background-position: center;
  background-repeat: no-repeat;
  height: 145px;
  margin-bottom: 20px;
  margin-left: 0;
`;

export const PartTitle = styled.h4`
  font-size: 25px;
  color: #1761a0;
  margin-bottom: 20px;
`;

export const Line = styled.hr`
  width: 60%;
  margin: auto;
  margin-bottom: 20px;
`;

export const PartDesc = styled.p`
  font-size: 14px;
  color: #eb5424;
  padding: 20px;
`;
