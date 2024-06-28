import styled from "styled-components";
import { animated } from "react-spring";

interface ProfileListSpanProps {
  web?: boolean;
}

export const ProfileSkills = styled.div`
  margin-top: 150px;
  padding: 50px 0;
  overflow: hidden;
  background-color: white;
`;

export const ProfileS = styled.div`
  width: 50%;
  float: left;
  color: black;
  height: 500px;
  margin-top: 50px;

  @media (max-width: 768px) {
    width: 100%;
    float: none;
    margin-bottom: 20px;
  }
`;

export const ProfileList = styled.ul`
  list-style: none;
`;

export const ProfileListItem = styled.li`
  margin-bottom: 8px;
`;

export const ProfileListSpan = styled.span<ProfileListSpanProps>`
  display: inline-block;
  width: 100px;
  font-weight: ${(props) => (props.web ? "normal" : "bold")};
  color: ${(props) => (props.web ? "#eb5424" : "black")};
`;

export const Skills = styled.div`
  padding-top: 50px;
  width: 50%;
  float: left;
  color: black;

  @media (max-width: 768px) {
    width: 100%;
    float: none;
    margin-bottom: 20px;
  }
`;

export const SkillDesc = styled.p`
  font-size: 15px;
  color: #888;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const Bar = styled.div`
  overflow: hidden;
  padding: 10px 0;
  margin-bottom: 10px;
`;

export const TitleSpan = styled.span`
  float: left;
`;

export const Percentage = styled.span`
  float: right;
  margin-right: 100px;
`;

export const Parent = styled.div`
  height: 2px;
  clear: both;
  background: #1761a0;
  position: relative;
  top: 5px;
`;

export const Span1 = styled(animated.div)`
  background: #eb5424;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
  height: 5px;
`;

export const Titles = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
  color: #1761a0;
`;

export const TitleSpans = styled.span`
  font-weight: normal;
  color: #eb5424;
`;
