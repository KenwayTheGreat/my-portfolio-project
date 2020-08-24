import React from "react";
import { useSpring } from "react-spring";
import {
  ProfileSkills,
  ProfileS,
  Titles,
  TitleSpans,
  ProfileList,
  ProfileListItem,
  ProfileListSpan,
  Skills,
  SkillDesc,
  Bar,
  TitleSpan,
  Percentage,
  Parent,
  Span1,
} from "./ProfileStyle.jsx";

export default function Profile(props) {
  const percHTML = useSpring({
    width: "100%",
    from: {
      width: "0%",
    },
    reset: true,
  });

  const percCSS = useSpring({
    width: "100%",
    from: {
      width: "0%",
    },
    reset: true,
  });

  const percJavaScript = useSpring({
    width: "90%",
    from: {
      width: "0%",
    },
    reset: true,
  });

  const percReact = useSpring({
    width: "90%",
    from: {
      width: "0%",
    },
    reset: true,
  });

  const percAngular = useSpring({
    width: "70%",
    from: {
      width: "0%",
    },
    reset: true,
  });

  const percFlutter = useSpring({
    width: "60%",
    from: {
      width: "0%",
    },
    reset: true,
  });

  const percsR = useSpring({
    width: "0%",
    reset: true,
  });

  return (
    <ProfileSkills id={"resumeSection"}>
      <div className="container">
        <ProfileS>
          <Titles>
            <TitleSpans>My </TitleSpans>Profile
          </Titles>
          <ProfileList>
            <ProfileListItem>
              <ProfileListSpan>Name</ProfileListSpan>
              Ahmed Amir Salem
            </ProfileListItem>
            <ProfileListItem>
              <ProfileListSpan>Birthday</ProfileListSpan>
              27/09/1994
            </ProfileListItem>
            <ProfileListItem>
              <ProfileListSpan>Address</ProfileListSpan>
              New Cairo
            </ProfileListItem>
            <ProfileListItem>
              <ProfileListSpan>Phone</ProfileListSpan>
              01112995348
            </ProfileListItem>
            <ProfileListItem>
              <ProfileListSpan>Email</ProfileListSpan>
              ahmad.amir2709@gmail.com
            </ProfileListItem>

            <ProfileListItem>
              <ProfileListSpan>LinkedIn Profile</ProfileListSpan>
              /ahmed-amir-salem
            </ProfileListItem>

            <ProfileListItem>
              <ProfileListSpan>Github Profile</ProfileListSpan>
              /KenwayTheGreat
            </ProfileListItem>
            <ProfileListItem>
              <ProfileListSpan>Website</ProfileListSpan>
              <ProfileListSpan web>www.ahmedamir.com</ProfileListSpan>
            </ProfileListItem>
          </ProfileList>
        </ProfileS>

        <Skills>
          <Titles>
            Some <TitleSpans>skills</TitleSpans>
          </Titles>
          <SkillDesc>
            These are my skills in development. Please note that they are
            subject to change after each project whether adding more or
            increasing the percentage of a specific skill.
          </SkillDesc>
          <Bar>
            <TitleSpan>HTML</TitleSpan>
            <Percentage>100%</Percentage>
            <Parent>
              <Span1
                style={props.activeStateSkills ? percHTML : percsR}
              ></Span1>
            </Parent>
          </Bar>

          <Bar>
            <TitleSpan>CSS</TitleSpan>
            <Percentage>100%</Percentage>
            <Parent>
              <Span1 style={props.activeStateSkills ? percCSS : percsR}></Span1>
            </Parent>
          </Bar>

          <Bar>
            <TitleSpan>JavaScript</TitleSpan>
            <Percentage>90%</Percentage>
            <Parent>
              <Span1
                style={props.activeStateSkills ? percJavaScript : percsR}
              ></Span1>
            </Parent>
          </Bar>

          <Bar>
            <TitleSpan>ReactJS</TitleSpan>
            <Percentage>90%</Percentage>
            <Parent>
              <Span1
                style={props.activeStateSkills ? percReact : percsR}
              ></Span1>
            </Parent>
          </Bar>

          <Bar>
            <TitleSpan>Angular</TitleSpan>
            <Percentage>70%</Percentage>
            <Parent>
              <Span1
                style={props.activeStateSkills ? percAngular : percsR}
              ></Span1>
            </Parent>
          </Bar>

          <Bar>
            <TitleSpan>Flutter</TitleSpan>
            <Percentage>60%</Percentage>
            <Parent>
              <Span1
                style={props.activeStateSkills ? percFlutter : percsR}
              ></Span1>
            </Parent>
          </Bar>
        </Skills>
      </div>
    </ProfileSkills>
  );
}
