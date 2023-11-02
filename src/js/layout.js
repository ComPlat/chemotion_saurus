import React from 'react';

export const SubTitle = ({ text }) => (<h3 className="subTitle">{text}</h3>);
export const FigCaption = ({ text }) => (<h3 className="figCaption">{text}</h3>);
export const YouTubeFrame = ({ src, title }) => (<iframe className="fit-container" src={src} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />);
export const Reader = ({ text }) => (<span className="theme-doc-version-badge badge badge--secondary reader-badge">Reader: {text}</span>);
