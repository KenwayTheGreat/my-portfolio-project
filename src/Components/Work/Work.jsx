import React from "react";
import {
  WorkS,
  WorkTitle,
  Span,
  WorkPart,
  Icon,
  Icon2,
  Icon3,
  PartTitle,
  Line,
  PartDesc,
} from "./WorkStyle";

export default function Work() {
  return (
    <WorkS id={"workSection"}>
      <div className="container">
        <WorkTitle>
          <Span>My</Span> Work
        </WorkTitle>
        <WorkPart first="1">
          <Icon></Icon>
          <PartTitle>Mobile Apps Development</PartTitle>
          <Line />
          <PartDesc>
            I develop applications for Android Software Mobiles using Flutter or
            React Native.
          </PartDesc>
        </WorkPart>

        <WorkPart>
          <Icon2></Icon2>
          <PartTitle>Front-end Development</PartTitle>
          <Line />
          <PartDesc>
            I develop Front-end for Website / Web-Based Applications using
            Frameworks React / Angular.
          </PartDesc>
        </WorkPart>

        <WorkPart>
          <Icon3></Icon3>
          <PartTitle>Game Development</PartTitle>
          <Line />
          <PartDesc>
            I develop games for PC / Mobiles for any purpose including marketing
            using Unity3D.
          </PartDesc>
        </WorkPart>
      </div>
    </WorkS>
  );
}
