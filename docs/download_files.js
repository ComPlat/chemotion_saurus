import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faDownload} from '@fortawesome/free-solid-svg-icons'


function download(files){
    // TODO 
    // return (
    //     <a target="_blank" href="/chemotionsaurus/files/template%20_sample_import.xlsx" download="template_sample_import.xlsx"></a>);

    setTimeout(() => {
    files.forEach((f) => {
        // alert(f);
        // console.log(f);
        
    //     return (
    //     <a target="_blank" href={f} download={f.split('/')[-1]}></a>);
    //     debugger;
    //    // <a target="_blank" href="/chemotionsaurus/files/template%20_sample_import.xlsx" download="template_sample_import.xlsx">Download href</a>
    });
}, 5000);
}

function getBtn(props){
return(
<button class="button button--primary" name="downloadBtn" onClick={download(props.files)}>{props.text}<FontAwesomeIcon icon={faDownload}/></button> );
}

export function DownloadBtn (props){

    // return{
    //     async getBtn(props){
    //         await downloadBtn(props.files);
    //     }
    // }

    return(
    <button className="button button--primary" name="downloadBtn" onClick={download(props.files)}>{props.text}<FontAwesomeIcon icon={faDownload}/></button> );

};

// export default Download;