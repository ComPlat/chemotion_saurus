import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from '@fortawesome/free-solid-svg-icons'

function download(files) {
    files.forEach((f) => {
        const filename = f.split('/').pop()
        const a = document.createElement("a");
        a.download = filename;
        a.href = f;
        a.click();
        a.remove();
    });
}

export function DownloadBtn (props){
        return(
            // https://reactjs.org/docs/faq-functions.html
            <button className="button button--primary" name="downloadBtn" onClick={() => download(props.files)}>{props.text}<FontAwesomeIcon icon={faDownload}/></button> 
            );
};