import styled from "styled-components";

export const SocialMediaS = styled.div`
  height: auto;
  overflow: hidden;

  @media (max-width: 991px) {
    width: 100%;
    float: none;
  }
`;

export const Social = styled.div`
  width: 33.33%;
  float: left;
  box-sizing: border-box;
  padding: 100px 0 100px 60px;
  background: ${props => props.item === 1 ? '#3b5998' : ''};
  background: ${props => props.item === 2 ? 'black' : ''};
  background: ${props => props.item === 3 ? '#0072b1' : ''};

  @media (max-width: 991px) {
    width: 100%;
    float: none;
  }
`;

export const Icon = styled.i`
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: white;
  float: left;
  margin-right: 10px;
  margin-top: 25px;
  
`;

export const Wrap = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
  padding-left: 15px;
  color: #fff;
  float:left;
`;

export const Span = styled.span`
  display: block;
  margin-bottom: 8px;
`;

export const Span2 = styled.span`
  font-weight: normal;
`;
