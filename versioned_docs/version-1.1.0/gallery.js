import React from 'react';
// import ReactMarkdown from "react-markdown";

export function Gallery({links, titles}){
  return (
    <div>
      <div className="row">
        {links.map((link, idx) => (
          <div className="col margin-top--lg margin-bottom--lg">
            {/*<ReactMarkdown source={'## '+ titles[idx]} />*/}
            <h3>{titles[idx]}</h3>
            <iframe
              width="320"
              height="180"
              src={link}
              // title={this.state.titles[idx]}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </div>
    )
}
