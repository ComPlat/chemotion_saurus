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
export const YouTubeFrame = ({ src, title }) =>
(<div style={{ position: "relative", aspectRatio: 1.7778 }}>
    <VideoPrivacy customButtonClass="button button--primary" info="YouTube will track your interaction with them." width="100%" imageUrl={imageUrlForYouTube(src)}>
        <iframe src={src} title={title} position="relative" width="100%" height="100%"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
    </VideoPrivacy >
</div>);
export const Reader = ({ text }) => (<span className="theme-doc-version-badge badge badge--secondary reader-badge">Reader: {text}</span>);
