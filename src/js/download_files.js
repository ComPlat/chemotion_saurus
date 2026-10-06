import React from 'react';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function download(files) {
  files.forEach((f) => {
    const filename = f.split('/').pop();
    const a = document.createElement('a');
    a.download = filename;
    a.href = f;
    a.click();
    a.remove();
  });
}

export function DownloadBtn(props) {
  // The site is served under baseUrl "/docs/", but the files= props are written
  // as site-root paths ("/files/x.xlsx"). Handing those straight to a.href
  // resolves against the domain root, not the site, so every download 404s.
  // withBaseUrl adds the prefix; it is idempotent, so paths that already carry
  // it are left alone.
  const { withBaseUrl } = useBaseUrlUtils();
  const files = props.files.map((f) => withBaseUrl(f.trim()));

  return (
  // https://reactjs.org/docs/faq-functions.html
    <button className="button button--primary" name="downloadBtn" onClick={() => download(files)}>
      {props.text}
      <FontAwesomeIcon icon={faDownload} />
    </button>
  );
}
