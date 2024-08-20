import React from 'react';
import VideoPrivacy from "video-privacy"

// from https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-video-id-from-a-url
function imageUrlForYouTube(url) {
    let re = /(https?:\/\/)?(((m|www)\.)?(youtube(-nocookie)?|youtube.googleapis)\.com.*(v\/|v=|vi=|vi\/|e\/|embed\/|user\/.*\/u\/\d+\/)|youtu\.be\/)([_0-9a-z-]+)/i;
    let id = url.match(re)[8];
    return `/img/yt_thumbnails/${id}.jpg`;
}

export const SubTitle = ({ text }) => (<h3 className="subTitle">{text}</h3>);
export const FigCaption = ({ text }) => (<h3 className="figCaption">{text}</h3>);
export const YouTubeFrame = ({ src, title, width, height }) =>
(<VideoPrivacy customButtonClass="button button--primary" info="YouTube will track your interaction with them." width={width + "px"} imageUrl={imageUrlForYouTube(src)}>
    <iframe src={src} title={title} width={width} height={height} allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
</VideoPrivacy>);
export const Reader = ({ text }) => (<span className="theme-doc-version-badge badge badge--secondary reader-badge">Reader: {text}</span>);
