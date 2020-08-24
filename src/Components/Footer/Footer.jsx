import React from "react";
import { FooterS, Span, Para } from "./FooterStyle.jsx";

export default function Footer() {
  return (
    <FooterS>
      <Para>
        {" "}
        this profile is a project portfolio made by{" "}
        <Span>Ahmed Amir Salem</Span>{" "}
      </Para>
    </FooterS>
  );
}
