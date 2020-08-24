import React from "react";
import {
  Creative,
  CreativeInfo,
  InfoTitle,
  InfoTitleJ,
  InfoDescription,
  Span
} from "./AboutStyle.jsx";

export default function About() {
  return (
    <Creative id={"aboutSection"}>
      <div className="container">
        <CreativeInfo>
          <InfoTitle>
            <Span>This is</Span> Me
          </InfoTitle>
          <InfoTitleJ>Software Engineer</InfoTitleJ>
          <InfoDescription>
            My name is Ahmed Amir Salem Iam a GUC (German University in Cairo)
            Computer Science Graduate. I love working in Web development, Mobile
            Applications and Game Development. As mentioned in the home part
            this is a portfolio Website for my work.
          </InfoDescription>
          <InfoDescription>
            My goal is to build a career in software development and hopefully
            game development. I love working in creative projects and learning
            more about designs and building great and impactful projects.
          </InfoDescription>
        </CreativeInfo>
      </div>
    </Creative>
  );
}
