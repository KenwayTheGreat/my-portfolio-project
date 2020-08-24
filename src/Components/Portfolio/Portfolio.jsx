import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  PortfolioS,
  PortfolioTitle,
  Span,
  Box,
  ImageWrapper,
  Image,
  Overlay,
  OverlaySpan,
} from "./PortfolioStyle.jsx";
import {
  ProjectModalR,
  ProjectModalA,
  ProjectModalB,
  ProjectModalF,
  ProjectModalI,
  ProjectModalP,
  ProjectModalU,
  ProjectModalW,
  ModalTitle,
  ModalSent,
  Wrap,
  CardTest,
  CardTitle,
  CardClick,
  CloseBtn,
} from "./ModalStyle.jsx";

export default function Portfolio() {
  const [images, setImages] = useState([]);
  const [projects, setProjects] = useState([]);
  const [openR, setOpenR] = useState(false);
  const [openA, setOpenA] = useState(false);
  const [openF, setOpenF] = useState(false);
  const [openB, setOpenB] = useState(false);
  const [openU, setOpenU] = useState(false);
  const [openP, setOpenP] = useState(false);
  const [openI, setOpenI] = useState(false);
  const [openW, setOpenW] = useState(false);

  useEffect(() => {
    axios.get("Data/Data.json").then((res) => {
      setImages(res.data.portfolio);
      setProjects(res.data.projects);
    });
  }, []);

  const PortfolioProjects = projects.map((projectItem) => {
    return (
      <Wrap key={projectItem.id}>
        <CardTest>
          <CardTitle>{projectItem.title}</CardTitle>
          <CardClick href={projectItem.site} target="_blank">
            Learn More <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </CardClick>
        </CardTest>
      </Wrap>
    );
  });

  const PortfolioImages = images.map((imageItem) => {
    return (
      <ImageWrapper key={imageItem.id}>
        <Image src={imageItem.image} alt="" />
        <Overlay name={imageItem.title}>
          <OverlaySpan
            name={imageItem.title}
            onClick={() => {
              switch (imageItem.title) {
                case "react":
                  setOpenR(!openR);
                  break;
                case "angular":
                  setOpenA(!openA);
                  break;
                case "flutter":
                  setOpenF(!openF);
                  break;
                case "bootstrap":
                  setOpenB(!openB);
                  break;
                case "unity":
                  setOpenU(!openU);
                  break;
                case "photoshop":
                  setOpenP(!openP);
                  break;
                case "ionic":
                  setOpenI(!openI);
                  break;
                default:
                  setOpenW(!openW);
              }
            }}
          >
            View Projects
          </OverlaySpan>
        </Overlay>
      </ImageWrapper>
    );
  });

  return (
    <PortfolioS id={"portfolioSection"}>
      <div className="container">
        <PortfolioTitle>
          <Span>My</Span> Portfolio
        </PortfolioTitle>
        <Box>{PortfolioImages}</Box>

        <ProjectModalR
          isOpen={openR}
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => setOpenR(!openR)}
          ariaHideApp={false}
        >
          <CloseBtn
            onClick={() => {
              setOpenR(!openR);
            }}
          >
            <i class="fa fa-times" aria-hidden="true" />
          </CloseBtn>
          <ModalTitle>My React Projects</ModalTitle>
          {PortfolioProjects}
        </ProjectModalR>

        <ProjectModalA
          isOpen={openA}
          ariaHideApp={false}
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => setOpenR(!openR)}
        >
          <CloseBtn
            onClick={() => {
              setOpenA(!openA);
            }}
          >
            <i class="fa fa-times" aria-hidden="true" />
          </CloseBtn>
          <ModalTitle>Angular Projects</ModalTitle>
          <ModalSent>Projects will be added Soon !!!</ModalSent>
        </ProjectModalA>

        <ProjectModalF
          isOpen={openF}
          ariaHideApp={false}
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => setOpenR(!openR)}
        >
          <CloseBtn
            onClick={() => {
              setOpenF(!openF);
            }}
          >
            <i class="fa fa-times" aria-hidden="true" />
          </CloseBtn>
          <ModalTitle>Flutter Projects</ModalTitle>
          <ModalSent>Projects will be added Soon !!!</ModalSent>
        </ProjectModalF>

        <ProjectModalB
          isOpen={openB}
          ariaHideApp={false}
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => setOpenR(!openR)}
        >
          <CloseBtn
            onClick={() => {
              setOpenB(!openB);
            }}
          >
            <i class="fa fa-times" aria-hidden="true" />
          </CloseBtn>
          <ModalTitle>Bootstrap Projects</ModalTitle>
          <ModalSent>Projects will be added Soon !!!</ModalSent>
        </ProjectModalB>

        <ProjectModalP
          isOpen={openP}
          ariaHideApp={false}
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => setOpenR(!openR)}
        >
          <CloseBtn
            onClick={() => {
              setOpenP(!openP);
            }}
          >
            <i class="fa fa-times" aria-hidden="true" />
          </CloseBtn>
          <ModalTitle>Photoshop Projects</ModalTitle>
          <ModalSent>Projects will be added Soon !!!</ModalSent>
        </ProjectModalP>

        <ProjectModalU
          isOpen={openU}
          ariaHideApp={false}
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => setOpenR(!openR)}
        >
          <CloseBtn
            onClick={() => {
              setOpenU(!openU);
            }}
          >
            <i class="fa fa-times" aria-hidden="true" />
          </CloseBtn>
          <ModalTitle>Unity Projects</ModalTitle>
          <ModalSent>Projects will be added Soon !!!</ModalSent>
        </ProjectModalU>

        <ProjectModalI
          isOpen={openI}
          ariaHideApp={false}
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => setOpenR(!openR)}
        >
          <CloseBtn
            onClick={() => {
              setOpenI(!openI);
            }}
          >
            <i class="fa fa-times" aria-hidden="true" />
          </CloseBtn>
          <ModalTitle>Ionic Projects</ModalTitle>
          <ModalSent>Projects will be added Soon !!!</ModalSent>
        </ProjectModalI>

        <ProjectModalW
          isOpen={openW}
          ariaHideApp={false}
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => setOpenR(!openR)}
        >
          <CloseBtn
            onClick={() => {
              setOpenW(!openW);
            }}
          >
            <i class="fa fa-times" aria-hidden="true" />
          </CloseBtn>
          <ModalTitle>WordPress Projects</ModalTitle>
          <ModalSent>Projects will be added Soon !!!</ModalSent>
        </ProjectModalW>
      </div>
    </PortfolioS>
  );
}
