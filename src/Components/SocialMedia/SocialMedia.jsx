import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  SocialMediaS,
  Social,
  Icon,
  Wrap,
  Span,
  Span2,
} from "./SocialMediaStyle.jsx";

export default function SocialMedia() {
  const [socialMedia, setSocialMedia] = useState([]);

  useEffect(() => {
    axios.get("Data/Data.json").then((res) => {
      setSocialMedia(res.data.social);
    });
  }, []);

  const socialMediaList = socialMedia.map((socialMediaItem) => {
    return (
      <Social key={socialMediaItem.id} item={socialMediaItem.id}>
        <a
          href={socialMediaItem.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon className={socialMediaItem.icon}></Icon>
        </a>
        <Wrap>
          <Span>{socialMediaItem.title}</Span>
          <Span2><i class="fas fa-arrow-left" /> {" "} {socialMediaItem.body}</Span2>
        </Wrap>
      </Social>
    );
  });

  return <SocialMediaS>{socialMediaList}</SocialMediaS>;
}
