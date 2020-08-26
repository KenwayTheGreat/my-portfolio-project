import styled from "styled-components";

export const Creative = styled.div`
  margin-top: 200px;
  height: 700px;
  background: url("/images/bg-home3.jpg");
  background-size: cover;
  background-position: center;

  @media (max-width: 991px) {
    height: auto;
  }
`;

export const CreativeInfo = styled.div`
  padding-top: 100px;
  width: 50%;
  float: left;

  @media (max-width: 991px) {
    width: 100%;
    padding-top: 10px;
    float: none;
  }
`;

export const InfoTitle = styled.h2`
  font-weight: bold;
  font-size: 50px;
  color: white;

  @media (max-width: 991px) {
    width: 100%;
    padding-top: 10px;
    float: none;
  }
`;

export const Span = styled.span`
  font-weight: normal;
  color:#eb5424;
`;

export const InfoTitleJ = styled.h4`
  font-size: 40px;
  color: #eb5424;
  margin-bottom: 20px;

  @media (max-width: 991px) {
    font-size: 30px;
  }
`;

export const InfoDescription = styled.p`
  color: white;
  margin-bottom: 15px;
  line-height: 1.8;
  
  @media (max-width: 991px) {
    padding-bottom: 30px;
  }
`;

export const Anchor = styled.a`
  text-decoration: none;
`;
