"use client";
/* eslint-disable */
/* eslint no-use-before-define: 2 */ // --> ON
import { useEffect } from "react";
import TagCloud from "TagCloud";

export const TagCloudComponent = () => {
  useEffect(() => {
    const container = ".tagcloud-container";
    const texts = [
      "NextJS",
      "React",
      "NodeJS",
      "TailwindCSS",
      "Javascript",
      "Github",
      "PrismaORM",
      "Git",
    ];

    const TagCloudOptions = {
      maxSpeed: "slow",
      initSpeed: "slow",
    };

    // Initialisation de TagCloud
    TagCloud(container, texts, TagCloudOptions);
  }, []);

  return <div></div>;
};
