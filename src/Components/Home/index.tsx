import {
  HomeS,
  HomeInformation,
  HomeTitle,
  HomeInfo,
  HomeDesc,
  Span,
  HomeBtn,
  Overlay,
} from "./HomeStyle";

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
            Hey, I&apos;m Ahmed Amir Salem, your go-to{" "}
            <Span> Frontend Software Engineer</Span>. Imagine me as your digital
            craftsman, blending technology with creativity for innovative web
            solutions. Each project is a journey from idea to reality, aiming
            for the extraordinary. Ready to shape the future? Let&apos;s dive in and
            make it happen <i className="fa-solid fa-champagne-glasses" /> .
          </HomeDesc>
          <HomeBtn
            to="workSection"
            spy
            smooth
            offset={-20}
            duration={500}
            // style={infoDesc}
          >
            Let&apos;s Begin
          </HomeBtn>
        </HomeInformation>
      </div>
    </HomeS>
  );
}
