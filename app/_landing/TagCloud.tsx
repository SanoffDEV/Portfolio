"use client";

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

    // Initialisation de TagCloud
    TagCloud(container, texts);
    window.location.reload;
  }, [window.location.reload]);

  return <div></div>;
};
