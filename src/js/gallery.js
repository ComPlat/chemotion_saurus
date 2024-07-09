import React from 'react';
import { YouTubeFrame } from "@site/src/js/layout";
// import ReactMarkdown from "react-markdown";

export function Gallery({ links, titles }) {
  return (
    <div>
      <div className="row">
        {links.map((link, idx) => (
          <div className="col margin-top--lg margin-bottom--lg">
            {/* <ReactMarkdown source={'## '+ titles[idx]} /> */}
            <h3>{titles[idx]}</h3>
            <YouTubeFrame
              width="400"
              height="225"
              src={link}
              title={titles[idx]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
