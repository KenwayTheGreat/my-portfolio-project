import React from "react";
import {
  HomeS,
  HomeInformation,
  HomeTitle,
  HomeInfo,
  HomeDesc,
  Span,
  HomeBtn,
  Overlay,
} from "./HomeStyle.jsx";

import { useSpring } from "react-spring";

export default function Home() {
  const titleProps = useSpring({
    from: { transform: "translate3d(0, -30rem, 0)" },
    transform: "translate3d(0, 0, 0)",
    delay: 1500,
  });

  const infoProps = useSpring({
    from: { transform: "translate3d(-80rem, 0, 0)" },
    transform: "translate3d(0, 0, 0)",
    delay: 2000,
  });

  const infoDesc = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    delay: 2500,
  });
  return (
    <HomeS id={"homeSection"}>
      <div className="container">
        <Overlay />

        <HomeInformation>
          <HomeTitle style={titleProps}>Ahmed Amir Salem</HomeTitle>
          <HomeInfo style={infoProps}>Software Engineer</HomeInfo>
          <HomeDesc style={infoDesc}>
            Iam a professional <Span>Software Engineer</Span> creating modern
            and responsive designs and interfaces to Web and Mobile
            Applications. You can see my documented work; I hope we get in
            contact to work together. Thank you.
          </HomeDesc>
          <HomeBtn
            to="workSection"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
            style={infoDesc}
          >
            Let's Begin
          </HomeBtn>
        </HomeInformation>
      </div>
    </HomeS>
  );
}
