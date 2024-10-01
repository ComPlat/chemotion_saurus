import React from 'react';
import { YouTubeFrame } from "@site/src/js/layout";
// import ReactMarkdown from "react-markdown";

export function Gallery({ links, titles }) {
  return (
    <div>
      {links.map((link, idx) => (
        <div>
          <h3>{titles[idx]}</h3>
          <YouTubeFrame
            src={link}
            title={titles[idx]}
          />
        </div>
      ))}
    </div>
  );
}